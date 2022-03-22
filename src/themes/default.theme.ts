import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    h1: {
      fontSize: 60,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 48,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 24,
      fontWeight: 'semibold',
    },
    h5: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 16,
      fontWeight: 'regular',
    },
    body2: {
      fontSize: 14,
      fontWeight: 'regular',
    },
    caption: {
      fontSize: 12,
      fontWeight: 'semibold',
    },
  } as TypographyOptions,
  palette: {
    primary: {
      main: '#0F0D15',
    },
    text: {
      primary: '#0F0D15',
    },
  } as PaletteOptions,
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          fontSize: '12px',
        },
        sizeMedium: {
          fontSize: '14px',
        },
        sizeLarge: {
          fontSize: '16px',
        },
      },
    },
  },
}) as ThemeOptions

export default defaultTheme
