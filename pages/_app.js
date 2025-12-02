import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const bgClass = Component.background || "";

  useEffect(() => {
    document.documentElement.className = bgClass;
  }, [bgClass]);

  return (
    <Component {...pageProps} />
  );
}