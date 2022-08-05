import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import "../css/components.css"
import Head from "next/head";
function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
          <title>My portfolio</title>
          <link rel="shortcut icon" href="logo_kh.png" />
          <meta
            name="description"
            content="Kevin Hernández Portfolio website"
          />
          <Component {...pageProps} />
        </Head>
      </>
    );
}

export default MyApp;
