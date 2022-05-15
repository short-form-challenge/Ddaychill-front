import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";

// import { isLoggedIn } from "@utiles/useLogin";
import Head from "next/head";
import MainLayout from "@components/layout/layout";
import Navigation from "@components/navigation/navigation";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@styles/globals.css";
import "styles/reset.scss";
import AxiosConfig from "libs/axios";
AxiosConfig();
config.autoAddCss = false;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // const [loginModal, setLoginModal] = useState(false);
  // const router = useRouter();
  // const tabMenu = router.pathname;

  // const showNavigation = (): boolean | undefined => {
  //   if (!tabMenu.includes("auth")) return true;
  // };

  // const checkLogin = () => {
  //   // if (!sessionStorage.getItem("accessToken")) {
  //   //   router.push("/auth/login");
  //   // } else
  //   if (
  //     !(
  //       router.pathname.includes("auth") ||
  //       router.pathname === "/user/mypage" ||
  //       router.pathname === "/"
  //     )
  //   ) {
  //     setLoginModal(true);
  //     console.log("hihi");
  //   }
  // };

  // useEffect(() => {
  //   checkLogin();
  //   console.log(router);
  // }, [router]);

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
          {/* {loginModal && (
            <Modal
              subConfirm="아니오"
              mainConfirm="예"
              onClickSubConfirm={() => {
                setLoginModal(false);
                router.push("/");
              }}
              onClickMainCofirm={() => {
                setLoginModal(false);
                router.push("/auth/login");
              }}
            > */}
          {/* <div>로그인을 통해 소통을 시작해보세요.</div> */}
          {/* </Modal> */}
          {/* )} */}
          <Component {...pageProps} />

          <Navigation />
          {/* {showNavigation() && <Navigation />} */}
        </MainLayout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
