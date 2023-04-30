import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import styles from "../styles/font.module.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session} >
        <Provider store={store}>
          <Layout font={styles.allFont}>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  );
}
