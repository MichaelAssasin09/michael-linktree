// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    loadData();
    initializeTooltips();
    trackPageView();
});

// Global State - Edit this object to customize your linktree!
let appData = {
    profile: {
        name: 'Michael Lintang Arsy',
        bio: 'Semua link aq, stalk aja semua!',
        image: 'assets/SON00329.jpg'
    },
    socialLinks: {
        instagram: 'https://www.instagram.com/mr_assasin09',
        linkedin: 'https://www.linkedin.com/in/michael-lintang-arsy-0b63b73ab',
        youtube: 'https://www.youtube.com/@MrAssasin09',
        github: 'https://github.com/MichaelAssasin09'
    },
    links: [
        {
            id: 1,
            title: 'My Portfolio',
            url: 'https://michaelportofolio.vercel.app/',
            icon: 'briefcase',
            style: 'outline'
        },
        {
            id: 2,
            title: 'Insight Corporation Group',
            url: 'https://insightcorpgroup.vercel.app/',
            icon: 'lightbulb',
            style: 'outline'
        },
        {
            id: 3,
            title: 'Assasin Store Instagram',
            url: 'https://www.instagram.com/assasin_store09?igsh=MTYzNzJ3Y3N0OWxvZw==',
            icon: 'instagram',
            style: 'outline'
        },
        {
            id: 4,
            title: 'My Gmail',
            url: 'mailto:lintangars1@gmail.com',
            icon: 'envelope',
            style: 'outline'
        }
    ],
    analytics: {
        views: 0,
        clicks: 0
    }
};

// Load Data from localStorage or use default
function loadData() {
    const savedData = localStorage.getItem('linktreeData');
    
    if (savedData) {
        try {
            appData = JSON.parse(savedData);
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    } else {
        // First time load - save default data
        saveData();
    }
    
    // Apply data to page
    applyDataToPage();
}

// Apply data to page elements
function applyDataToPage() {
    // Profile
    document.getElementById('profileName').textContent = appData.profile.name;
    document.getElementById('profileBio').textContent = appData.profile.bio;
    document.getElementById('profileImage').src = appData.profile.image;
    
    // Social Links
    updateSocialIconLinks();
    
    // Links
    renderLinks();
    
    // Analytics
    updateAnalyticsDisplay();
}

// Update Social Icon Links
function updateSocialIconLinks() {
    const platforms = ['instagram', 'twitter', 'facebook', 'linkedin', 'youtube', 'github'];
    
    platforms.forEach(platform => {
        const icon = document.querySelector(`.social-icon[data-platform="${platform}"]`);
        if (icon) {
            const url = appData.socialLinks[platform];
            if (url && url.trim() !== '') {
                icon.href = url;
                icon.style.opacity = '1';
                icon.addEventListener('click', trackClick);
            } else {
                icon.href = '#';
                icon.style.opacity = '0.3';
                icon.addEventListener('click', function(e) {
                    e.preventDefault();
                });
            }
        }
    });
}

// Render Links
function renderLinks() {
    const container = document.getElementById('linksContainer');
    container.innerHTML = '';
    
    appData.links.forEach((link) => {
        const linkElement = createLinkElement(link);
        container.appendChild(linkElement);
    });
}

// Create Link Element
function createLinkElement(link) {
    const div = document.createElement('a');
    div.className = `link-item style-${link.style}`;
    div.href = link.url;
    div.target = '_blank';
    div.rel = 'noopener noreferrer';
    
    // Track clicks
    div.addEventListener('click', trackClick);
    
    div.innerHTML = `
        <div class="link-icon">
            <i class="bi bi-${link.icon}"></i>
        </div>
        <div class="link-content">
            <h3 class="link-title">${escapeHtml(link.title)}</h3>
            <p class="link-url-display">${getDisplayUrl(link.url)}</p>
        </div>
        <div class="link-arrow">
            <i class="bi bi-arrow-right"></i>
        </div>
    `;
    
    return div;
}

// Analytics
function trackPageView() {
    appData.analytics.views++;
    saveData();
    updateAnalyticsDisplay();
}

function trackClick() {
    appData.analytics.clicks++;
    saveData();
    updateAnalyticsDisplay();
}

function updateAnalyticsDisplay() {
    document.getElementById('viewCount').textContent = appData.analytics.views;
    document.getElementById('clickCount').textContent = appData.analytics.clicks;
}

// Data Persistence
function saveData() {
    localStorage.setItem('linktreeData', JSON.stringify(appData));
}

// Utility Functions
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function getDisplayUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch (e) {
        return url.substring(0, 30) + (url.length > 30 ? '...' : '');
    }
}

// Initialize Bootstrap Tooltips
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Manual Data Management Functions (for developers)
window.linktreeData = {
    // Get current data
    get: function() {
        return JSON.parse(JSON.stringify(appData));
    },
    
    // Set new data and reload
    set: function(newData) {
        appData = newData;
        saveData();
        applyDataToPage();
        console.log('✅ Data updated successfully!');
    },
    
    // Update profile
    updateProfile: function(name, bio, imageUrl) {
        appData.profile.name = name;
        appData.profile.bio = bio;
        appData.profile.image = imageUrl;
        saveData();
        applyDataToPage();
        console.log('✅ Profile updated!');
    },
    
    // Update social links
    updateSocial: function(platform, url) {
        if (appData.socialLinks.hasOwnProperty(platform)) {
            appData.socialLinks[platform] = url;
            saveData();
            applyDataToPage();
            console.log(`✅ ${platform} link updated!`);
        } else {
            console.error('❌ Invalid platform. Use: instagram, twitter, facebook, linkedin, youtube, github');
        }
    },
    
    // Add a link
    addLink: function(title, url, icon = 'link-45deg', style = 'default') {
        const newLink = {
            id: Date.now(),
            title: title,
            url: url,
            icon: icon,
            style: style
        };
        appData.links.push(newLink);
        saveData();
        applyDataToPage();
        console.log('✅ Link added!');
    },
    
    // Remove a link by index
    removeLink: function(index) {
        if (index >= 0 && index < appData.links.length) {
            appData.links.splice(index, 1);
            saveData();
            applyDataToPage();
            console.log('✅ Link removed!');
        } else {
            console.error('❌ Invalid index');
        }
    },
    
    // Update a link by index
    updateLink: function(index, title, url, icon, style) {
        if (index >= 0 && index < appData.links.length) {
            appData.links[index] = {
                id: appData.links[index].id,
                title: title,
                url: url,
                icon: icon || appData.links[index].icon,
                style: style || appData.links[index].style
            };
            saveData();
            applyDataToPage();
            console.log('✅ Link updated!');
        } else {
            console.error('❌ Invalid index');
        }
    },
    
    // Export data
    export: function() {
        const dataStr = JSON.stringify(appData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = 'linktree-data.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        console.log('✅ Data exported!');
    },
    
    // Import data
    import: function(jsonData) {
        try {
            const importedData = JSON.parse(jsonData);
            appData = importedData;
            saveData();
            applyDataToPage();
            console.log('✅ Data imported successfully!');
        } catch (e) {
            console.error('❌ Invalid JSON data');
        }
    },
    
    // Reset analytics
    resetAnalytics: function() {
        appData.analytics.views = 0;
        appData.analytics.clicks = 0;
        saveData();
        updateAnalyticsDisplay();
        console.log('✅ Analytics reset!');
    },
    
    // Reset all data
    reset: function() {
        if (confirm('Are you sure? This will delete all your data!')) {
            localStorage.removeItem('linktreeData');
            location.reload();
        }
    }
};

// Console Helper
console.log('%c🎨 Linktree Custom Clone', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cMade with ❤️ using Bootstrap 5', 'font-size: 14px; color: #60a5fa;');
console.log('%c\n📝 Manual Data Management:', 'font-size: 14px; font-weight: bold; color: #3b82f6;');
console.log('%cUse window.linktreeData object to manage your data:\n', 'font-size: 12px; color: #94a3b8;');
console.log('%c  window.linktreeData.get()', 'font-size: 12px; color: #10b981;');
console.log('%c  → Get current data\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.updateProfile("Name", "Bio", "imageURL")', 'font-size: 12px; color: #10b981;');
console.log('%c  → Update profile info\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.updateSocial("instagram", "https://...")', 'font-size: 12px; color: #10b981;');
console.log('%c  → Update social link\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.addLink("Title", "URL", "icon", "style")', 'font-size: 12px; color: #10b981;');
console.log('%c  → Add new link\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.removeLink(0)', 'font-size: 12px; color: #10b981;');
console.log('%c  → Remove link by index\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.export()', 'font-size: 12px; color: #10b981;');
console.log('%c  → Export data to JSON\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c  window.linktreeData.reset()', 'font-size: 12px; color: #10b981;');
console.log('%c  → Reset all data\n', 'font-size: 11px; color: #94a3b8;');
console.log('%c\n📖 Full documentation: Check README.md', 'font-size: 12px; color: #60a5fa;');
