import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../components/Reveal/revealjs/css/reveal.css";
import "../components/Reveal/revealjs/css/theme/white.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
