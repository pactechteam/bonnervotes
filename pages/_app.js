import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import '../styles/normalize.css';
import '../styles/globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div id="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

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
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
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
