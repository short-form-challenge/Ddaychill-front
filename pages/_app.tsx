import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";
import MainLayout from "@components/layout/layout";
import Navigation from "@components/navigation/navigation";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@styles/globals.css";
import "styles/reset.scss";
import AxiosConfig from "libs/axios";
import OnboardingComponent from "@components/onboarding/OnboardingComponent";
import { useState } from "react";

AxiosConfig();
config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0"
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
          {isLoading ? (
            <OnboardingComponent />
          ) : (
            <>
              <Component {...pageProps} />
              <Navigation />
            </>
          )}
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
