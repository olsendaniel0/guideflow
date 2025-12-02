import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const bgClass = Component.background || "";

  useEffect(() => {
    // Save previous classes so we can restore on cleanup
    const prevHtmlClass = document.documentElement.className;
    const prevBodyClass = document.body.className;

    document.documentElement.className = bgClass;
    document.body.className = bgClass;

    return () => {
      document.documentElement.className = prevHtmlClass;
      document.body.className = prevBodyClass;
    };
  }, [bgClass]);

  return (
    <Component {...pageProps} />
  );
}