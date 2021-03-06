import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
