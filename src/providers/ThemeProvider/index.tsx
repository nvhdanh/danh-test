import { CssBaseline } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

type ThemeProviderProps = {
  children: React.ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const joyTheme = extendTheme({});

  return (
    <CssVarsProvider theme={joyTheme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;
