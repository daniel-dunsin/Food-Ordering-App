import { AppProps } from "next/app";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { GlobalStyle } from "../styles/globalStyle";
import Theme from "../styles/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}

export default MyApp;
