import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/reset.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>🌸Stacc GIRLPOWER H22🌸</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
