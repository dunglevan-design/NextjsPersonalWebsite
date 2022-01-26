import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import { useEffect } from "react";
import styles from "../styles/scrollbar.module.css"
import globalstyles from "../styles/global.css"

const Website = ({ Component, pageProps, router }) => {
  const [loading, setLoading] = useState(true);
  const firstVisit = useRef(true);

  useEffect(() => {
    const body = document.querySelector("#main__wrapper");
    console.log(body.classList);
    body.style.overflowX = "hidden";
    body.style.overflowY = "hidden";
  }, []);

  useEffect(() => {
    setTimeout(() => {
      firstVisit.current = false;
      setLoading(false);
      const body = document.querySelector("#main__wrapper");
      body.style.overflowY = "scroll";
    }, 3300);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {loading && firstVisit && <SplashScreen />}
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
