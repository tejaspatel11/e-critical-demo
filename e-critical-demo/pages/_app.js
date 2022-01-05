import Head from 'next/head';
import "../styles/globals.css";
import "../styles/table.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/064296735c.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
