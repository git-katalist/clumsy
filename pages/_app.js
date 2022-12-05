import { ThemeProvider } from "styled-components";
import { Theme } from "../styles/Theme";
import { Global } from "styles/Global";
import { prefix } from "../utils/prefix";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Global />

      <Component {...pageProps} prefix={prefix} />
    </ThemeProvider>
  );
}

export default MyApp;
