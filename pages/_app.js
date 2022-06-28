import { useReducer } from 'react';
import { initialState, reducer } from "../utils/stateManagement.js";

import Layout from "../components/SiteStructure/Layout.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Layout>
      <Component {...pageProps} state={state} />
    </Layout>
  );
}

export default MyApp;
