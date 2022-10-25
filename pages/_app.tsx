import { AppProps } from "next/app";
import "../styles/globals.css";
import store from "../store";
import { Provider } from "react-redux";
import { GlobalStyle } from "../styles/globalStyle";

const theme = {
  colors: {
    orange: "#f8901c",
    black: "#373848",
  },
  screens: {
    mobile: "500px",
    tablet: "800px",
    laptops: "1200px",
    desktops: "1440px",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
