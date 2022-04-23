import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/redux";
import ThemeProvider from "../context/theme-context";
import CounterContextProvider from "../context/counter-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <CounterContextProvider>
          <Component {...pageProps} />
        </CounterContextProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
