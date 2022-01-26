import Head from "next/head";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar";
import Shiba from "../shiba";
import NoSsr from "../no-ssr";
import {
  SvgButtonGithub,
  SvgButtonInsta,
  SvgButtonLinked,
} from "../SvgButtons";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import styles from "../../styles/email.module.css";
import Scrollbarstyles from "../../styles/scrollbar.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const AnimatedContainer = motion(Container);
const AnimatedBox = motion(Box);

const Main = ({ children, router }) => {
  const color = useColorModeValue("#2c7a7b", "#88ccca");
  const firstmount = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      firstmount = false;
    }, 1000);
  }, []);

  return (
    <Box id = "main__wrapper" className={Scrollbarstyles.wrapper} width={"100vw"} height={"100vh"} overflowY={"scroll"}>
      <Box as="main" pb={8}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale = 1"
          />
          <title>Jun Le - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <AnimatedContainer
          maxW="container.xl"
          pt={14}
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ delay: 4.4 }}
        >
          {/* 3D dog */}
          <NoSsr>
            <Shiba />
          </NoSsr>

          {/* Pages */}
          {children}
        </AnimatedContainer>

        {/* Link left */}
        <AnimatedBox
          position="fixed"
          bottom={0}
          left={20}
          display={["none", "none", "none", "flex"]}
          flexDirection={"column"}
          alignItems={"center"}
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ delay: 4.6 }}
        >
          <SvgButtonGithub />
          <SvgButtonInsta />
          <SvgButtonLinked />
          <Box
            height={150}
            width={0.5}
            background={"#81e6d9"}
            zIndex={10}
          ></Box>
        </AnimatedBox>

        {/* Link right */}

        <AnimatedBox
          position={"fixed"}
          bottom={0}
          right={20}
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          flexDirection={"column"}
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ delay: 4.6 }}
        >
          <motion.div whileHover={{ color: "#81e6d9", y: -5 }}>
            <Link
              className={styles.email}
              mb={8}
              textDecoration={"none"}
              href="mailto:dunglevan2001@gmail.com"
              color={color}
            >
              dunglevan2001@gmail.com
            </Link>
          </motion.div>
          <Box height={150} width={0.5} background={color} zIndex={10}></Box>
        </AnimatedBox>
      </Box>
    </Box>
  );
};

export default Main;
