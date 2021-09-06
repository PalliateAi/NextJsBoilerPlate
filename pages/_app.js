import "../styles/globals.css";
import Layout from "../components/Layout";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "../components/Form/Form.css";

function MyApp({ Component, pageProps }) {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Router>
  );
}

export default MyApp;
