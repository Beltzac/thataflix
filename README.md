# Thataflix 🍊

> A Jellyfin theme inspired by [thalitaneres.com.br](https://www.thalitaneres.com.br/) — warm orange accents on a dark canvas.

![Theme Preview](preview.png)

## Features

- **Dark & warm** — `#151515` background with orange `#fb610f` accent
- **Custom font** — Includes the "Thata Regular" handwritten display font
- **Rounded cards** — `0.6em` border radius for a modern, soft look
- **Full color scheme** — MUI theme + CSS variable overrides for complete coverage

## Installation

### Option 1: Custom CSS (Quick & Easy)

Paste this in **Dashboard → General → Custom CSS**:

```css
:root {
  --main-bgcolor: #151515;
  --sidebarbg: #202020;
  --accent: #fb610f;
  --accent-hover: #d04e00;
  --text-primary: #fbfaf7;
  --text-secondary: rgba(251, 250, 247, 0.7);
  --card-bg: #202020;
  --card-radius: 0.6em;
  --header-bg: rgba(21, 21, 21, 0.85);
  --emby-input-bg: rgba(255, 255, 255, 0.06);
  --emby-select-bg: #202020;
}

/* Nav selected */
.navMenuOption-selected {
  background: #fb610f !important;
  color: #fff !important;
}

/* Buttons */
.button-submit {
  background: #fb610f !important;
  color: #fff !important;
}
.button-submit:hover {
  background: #d04e00 !important;
}

/* Progress bars */
.itemProgressBarForeground {
  background: #fb610f !important;
}

/* Checkboxes */
.emby-checkbox:checked + span + .checkboxOutline {
  background: #fb610f !important;
  border-color: #fb610f !important;
}

/* Scrollbar */
::-webkit-scrollbar-thumb {
  background: #fb610f !important;
}
```

### Option 2: Build from Source (Full Theme)

1. Clone jellyfin-web and Thataflix:
```bash
git clone https://github.com/jellyfin/jellyfin-web.git
cd jellyfin-web
npm install
```

2. Clone Thataflix into the themes directory:
```bash
git clone https://github.com/Beltzac/thataflix.git src/themes/thataflix
```

3. Register the theme in `src/themes/index.ts`:
```ts
import thataflix from './thataflix';
// Add to colorSchemes:
colorSchemes: {
  // ... existing themes ...
  thataflix,
}
```

4. Build:
```bash
npm run build:production
```

5. Copy `dist/` to your Jellyfin server's web root.

## Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `#151515` | Background | Main page background |
| `#202020` | Surface | Cards, sidebar, paper |
| `#fb610f` | Accent | Buttons, selection, progress |
| `#fbfaf7` | Text | Primary text color |
| `#f2b01e` | Star | Rating stars |

## License

MIT
