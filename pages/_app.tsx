import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { useRouter } from "next/router";
// import { isLoggedIn } from "@utiles/useLogin";

import Head from "next/head";
import MainLayout from "@components/layout/layout";
import Navigation from "../components/navigation/navigation";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@styles/globals.css";
import "styles/reset.scss";
config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const tabMenu = router.pathname;

  const showNavigation = (): boolean | undefined => {
    if (!tabMenu.includes("auth")) return true;
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dday Chill</title>
        <link
          rel="stylesheet"
          href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
          {showNavigation() && <Navigation />}
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
