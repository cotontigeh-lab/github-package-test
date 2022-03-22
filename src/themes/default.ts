import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import { orange } from '@mui/material/colors'

const defaultTheme = createTheme({
  typography: {
    fontFamily: 'Nunito Sans',
  } as TypographyOptions,
  palette: {
    primary: {
      main: orange[500],
    },
    text: {
      primary: orange[500],
    },
  } as PaletteOptions,
}) as ThemeOptions

export default defaultTheme
