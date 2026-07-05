/* eslint-disable */
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
    interface Palette {
        starIcon: PaletteColor;
    }
    interface PaletteOptions {
        starIcon?: PaletteColorOptions;
    }
}

declare module '@mui/material/styles' {
    interface PaletteColor {
        main: string;
    }
}
