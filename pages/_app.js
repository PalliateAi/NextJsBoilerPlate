import "../styles/globals.css";
import Layout from "../components/Layout";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "../components/Form/Form.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Router>
  );
}

export default MyApp;
