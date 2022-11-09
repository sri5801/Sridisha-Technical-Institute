import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import "../styles/Home.module.css";
import { Provider } from "react-redux";
import { store, persistor } from "../Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  ); 
}

export default MyApp;
