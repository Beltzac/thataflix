import type { ColorSystemOptions } from '@mui/material/styles';

import { buildCustomColorScheme } from '../../utils';

/** Thataflix - Inspired by thalitaneres.com.br */
const theme: ColorSystemOptions = buildCustomColorScheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fb610f',
            dark: '#d04e00',
            light: '#fc8140',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#fbfaf7',
            contrastText: '#151515'
        },
        error: {
            main: '#d32f2f',
            dark: '#b71c1c',
            light: '#ef5350',
            contrastText: '#ffffff'
        },
        background: {
            default: '#151515',
            paper: '#202020'
        },
        text: {
            primary: '#fbfaf7',
            secondary: 'rgba(251, 250, 247, 0.7)'
        },
        action: {
            focus: 'rgba(251, 97, 15, 0.2)',
            hover: 'rgba(251, 97, 15, 0.12)',
            selectedOpacity: 0.2
        },
        divider: 'rgba(251, 250, 247, 0.08)',
        starIcon: {
            main: '#f2b01e'
        },
        AppBar: {
            defaultBg: '#1a1a1a'
        },
        SnackbarContent: {
            bg: '#202020',
            color: '#fbfaf7'
        },
        Alert: {
            infoFilledBg: '#1a1a1a',
            infoFilledColor: '#fbfaf7'
        },
        Button: {
            inheritContainedBg: '#2a2a2a',
            inheritContainedHoverBg: '#333333'
        }
    }
});

export default theme;
