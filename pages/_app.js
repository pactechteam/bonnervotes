import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/normalize.css';
import '../styles/globals.css';
import '../styles/grid.scss';
import '../styles/utils.scss';

/**
 * Site Layout
 */
const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

/**
 * Application Component
 */
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // TODO: Move into a hook
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `[router] Moving to ${url} ${shallow ? 'with' : 'without'} shallow routing`
      );
    }
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    }
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Adobe Fonts */}
        <script src="//use.typekit.net/ics4lea.js"></script>
        <script>{"try{Typekit.load({ async: true });}catch(e){ }"}</script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
