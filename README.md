# 🎨 Linktree Custom Clone (Manual Edit Version)

Website Linktree custom yang modern, minimalist, dan fully-featured dengan Bootstrap 5. Gratis, tanpa batasan, dan tanpa admin panel - edit langsung via code!

## ✨ Fitur Lengkap

### 🎯 Fitur Utama
- ✅ **Profile Customization** - Foto profil, nama, dan bio
- ✅ **Social Media Links** - 6 platform sosial media (Instagram, Twitter, Facebook, LinkedIn, YouTube, GitHub)
- ✅ **Unlimited Links** - Tambahkan link sebanyak yang Anda mau
- ✅ **Custom Link Styles** - 3 pilihan style: Default, Outline, Filled
- ✅ **Custom Icons** - Pilih dari ribuan Bootstrap Icons
- ✅ **Analytics** - Tracking views dan clicks
- ✅ **Local Storage** - Data tersimpan otomatis di browser
- ✅ **Export/Import Data** - Backup dan restore data Anda
- ✅ **Responsive Design** - Sempurna di semua device
- ✅ **Dark Blue Theme** - Modern dan professional
- ✅ **Smooth Animations** - Transisi halus dan micro-interactions
- ✅ **Manual Editing** - Edit via console browser atau langsung di code

### 🎨 Keunggulan Design
- Modern minimalist aesthetic
- Gradient backgrounds dengan animated patterns
- Smooth hover effects dan transitions
- Custom scrollbar
- Beautiful typography dengan Sora font
- Professional color scheme
- Glassmorphism effects
- Staggered animations

## 🚀 Cara Menggunakan

### Setup Awal
1. Download semua file (index.html, styles.css, script.js)
2. Letakkan semua file di satu folder
3. Buka `index.html` di browser Anda
4. Done! Website Anda sudah siap

### 📝 Cara Edit Data

Ada 2 cara untuk mengedit data Anda:

#### **Cara 1: Edit Langsung di script.js (Recommended untuk Permanent Changes)**

Buka file `script.js` dan edit object `appData` di bagian atas:

```javascript
let appData = {
    profile: {
        name: 'Nama Anda',  // Ubah nama
        bio: 'Bio Anda di sini!',  // Ubah bio
        image: 'https://example.com/foto.jpg'  // URL foto profil
    },
    socialLinks: {
        instagram: 'https://instagram.com/username',
        twitter: 'https://twitter.com/username',
        facebook: 'https://facebook.com/username',
        linkedin: 'https://linkedin.com/in/username',
        youtube: 'https://youtube.com/@username',
        github: 'https://github.com/username'
    },
    links: [
        {
            id: 1,
            title: 'My Website',
            url: 'https://example.com',
            icon: 'globe',  // Icon dari Bootstrap Icons
            style: 'default'  // default, outline, atau filled
        },
        {
            id: 2,
            title: 'Portfolio',
            url: 'https://example.com/portfolio',
            icon: 'briefcase',
            style: 'outline'
        }
        // Tambah link sebanyak yang Anda mau...
    ],
    analytics: {
        views: 0,
        clicks: 0
    }
};
```

Save file, refresh browser, dan changes akan langsung terlihat!

#### **Cara 2: Edit via Console Browser (Quick Testing)**

1. Buka website di browser
2. Tekan `F12` untuk membuka Developer Tools
3. Pilih tab **Console**
4. Gunakan command berikut:

```javascript
// Update Profile
window.linktreeData.updateProfile('Nama Baru', 'Bio baru saya', 'https://example.com/foto.jpg');

// Update Social Link
window.linktreeData.updateSocial('instagram', 'https://instagram.com/myusername');

// Add New Link
window.linktreeData.addLink('My Blog', 'https://myblog.com', 'pencil-square', 'filled');

// Remove Link (by index, mulai dari 0)
window.linktreeData.removeLink(0);  // Hapus link pertama

// Update Link (index, title, url, icon, style)
window.linktreeData.updateLink(0, 'Updated Title', 'https://newurl.com', 'star', 'outline');

// Export Data (untuk backup)
window.linktreeData.export();

// Get Current Data (untuk melihat data)
window.linktreeData.get();

// Reset Analytics
window.linktreeData.resetAnalytics();

// Reset All Data
window.linktreeData.reset();
```

**Note:** Changes via console tersimpan di localStorage dan akan hilang jika Anda clear browser cache. Untuk permanent changes, edit langsung di `script.js`.

## 🎨 Customization Guide

### Mengubah Warna Theme

Edit file `styles.css` di bagian `:root`:

```css
:root {
    /* Ubah warna sesuai keinginan */
    --primary-dark: #0a1628;      /* Background utama */
    --primary-blue: #1e3a8a;      /* Primary blue */
    --secondary-blue: #2563eb;    /* Secondary blue */
    --accent-blue: #3b82f6;       /* Accent color */
    /* ... */
}
```

### Mengubah Font

Edit di `index.html` bagian Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Lalu update di `styles.css`:

```css
:root {
    --font-primary: 'YourFont', sans-serif;
}
```

### Icon Options

Semua icon menggunakan [Bootstrap Icons](https://icons.getbootstrap.com/). Contoh icon populer:
- `globe` - Website
- `envelope` - Email
- `briefcase` - Portfolio
- `camera` - Photography
- `music-note` - Music
- `play-btn` - Video
- `book` - Blog
- `cart` - Shop
- `github` - GitHub
- `linkedin` - LinkedIn

Cukup gunakan nama icon tanpa prefix `bi-`.

### Link Style Options

Ada 3 style yang tersedia:
1. **default** - Solid background dengan accent kiri
2. **outline** - Transparan background dengan border
3. **filled** - Full gradient background

## 💾 Data Storage

Semua data disimpan di **Local Storage** browser:
- Aman dan private
- Tidak butuh server/database
- Data tidak hilang saat refresh
- Bisa di-export untuk backup

⚠️ **Important**: Clear browser cache akan menghapus data! Selalu backup dengan export atau simpan `appData` object Anda.

## 🌐 Deploy Website

### GitHub Pages (Gratis)
1. Create repository baru di GitHub
2. Upload semua file (index.html, styles.css, script.js)
3. Settings → Pages → Source: main branch
4. Website live!

### Netlify / Vercel (Gratis)
1. Drag & drop folder atau connect GitHub
2. Deploy otomatis!

## 📊 Analytics

Website mencatat:
- **Views**: Total page views
- **Clicks**: Total klik pada semua links

## 💡 Tips & Tricks

1. **Backup data** via `window.linktreeData.export()`
2. **Save appData object** di file terpisah
3. **Test di berbagai browser**
4. **Gunakan emoji** di link titles
5. **Compress images** untuk loading cepat

## 🔒 Privacy & Security

- ✅ No tracking
- ✅ No cookies  
- ✅ Data 100% lokal
- ✅ Open source

## 📝 Lisensi

Free to use, modify, and distribute!

---

Made with ❤️ using Bootstrap 5

**Selamat menggunakan Linktree custom Anda!** 🚀

## 📞 Quick Reference - Console Commands

```javascript
// Profile
window.linktreeData.updateProfile(name, bio, imageUrl)

// Social (platforms: instagram, twitter, facebook, linkedin, youtube, github)
window.linktreeData.updateSocial(platform, url)

// Links (styles: default, outline, filled)
window.linktreeData.addLink(title, url, icon, style)
window.linktreeData.removeLink(index)
window.linktreeData.updateLink(index, title, url, icon, style)

// Data Management
window.linktreeData.get()
window.linktreeData.export()
window.linktreeData.import(jsonData)
window.linktreeData.reset()
window.linktreeData.resetAnalytics()
```
