import { CssVarsProvider, extendTheme } from '@mui/joy/styles'

type ThemeProviderProps = {
  children: React.ReactNode
}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const joyTheme = extendTheme({})

  return <CssVarsProvider theme={joyTheme}>{children}</CssVarsProvider>
}

export default ThemeProvider
