import type { ColorSystemOptions } from '@mui/material/styles';
import { buildCustomColorScheme } from '../../utils';

/** Tema Thataflix — inspirado em thalitaneres.com.br (modo claro/quente) */
const theme: ColorSystemOptions = buildCustomColorScheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fb610f',
            dark: '#d04e00',
            light: '#fc8a4a',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#e0deca',
            contrastText: '#202020'
        },
        error: {
            main: '#d32f2f',
            dark: '#b71c1c',
            light: '#ef5350',
            contrastText: '#ffffff'
        },
        background: {
            default: '#f7f5ee',
            paper: '#ffffff'
        },
        text: {
            primary: '#202020',
            secondary: 'rgba(32, 32, 32, 0.65)'
        },
        action: {
            focus: 'rgba(251, 97, 15, 0.2)',
            hover: 'rgba(251, 97, 15, 0.08)',
            selectedOpacity: 0.15
        },
        divider: 'rgba(32, 32, 32, 0.1)',
        starIcon: { main: '#f2b01e' },
        AppBar: { defaultBg: '#202020' },
        SnackbarContent: { bg: '#202020', color: '#fbfaf7' },
        Alert: { infoFilledBg: '#e8e6df', infoFilledColor: '#202020' },
        Button: {
            inheritContainedBg: '#e8e6df',
            inheritContainedHoverBg: '#dcd9d0'
        }
    }
});

export default theme;
