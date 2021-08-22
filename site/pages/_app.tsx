import '../../core/dist/bundle.css';
import type { AppProps } from 'next/app';
import '../App.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
