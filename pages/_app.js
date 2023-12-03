import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.css";
import store from "@/redux/store";
import theme from "@/styles/theme";

const persistor = persistStore(store, {}, function () {
  persistor.persist();
});

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
        {/* <CssBaseline /> */}
      </ThemeProvider>
    </StrictMode>
  );
}

export default MyApp;
