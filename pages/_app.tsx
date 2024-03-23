import Footer from "@/modules/footer";
import Header from "@/modules/header";
import NavBar from "@/modules/nav-bar";
import { globalStyles } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const { addEventListener, removeEventListener, scrollTo } = window;
    const appResizeHandler = () => {
      scrollTo(0, 0);
      router.reload();
    };
    addEventListener("resize", appResizeHandler);
    return () => removeEventListener("resize", appResizeHandler);
  }, [router]);
  return (
    <>
      <Head>
        <title>Sai Rohit</title>
      </Head>
      <Global styles={globalStyles} />
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
