import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/normalize.css';
import '../styles/globals.scss';
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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
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
