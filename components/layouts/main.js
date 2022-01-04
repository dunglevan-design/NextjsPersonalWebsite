import Head from "next/head";
import { Box, Container, Text } from "@chakra-ui/react";
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
import { motion } from "framer-motion";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale = 1" />
        <title>Jun Le - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={14}>
        <NoSsr>
          <Shiba />
        </NoSsr>
        {children}
      </Container>

      <Box
        position="fixed"
        bottom={0}
        left={20}
        display={{ sm: "none", lg: "flex" }}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <SvgButtonGithub />
        <SvgButtonInsta />
        <SvgButtonLinked />
        <Box height={150} width={0.5} background={"#81e6d9"} zIndex={10}></Box>
      </Box>

      <Box
        position={"fixed"}
        bottom={0}
        right={20}
        display={{ sm: "none", lg: "flex" }}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <motion.div whileHover={{ color: "#81e6d9", y: -5 }}>
          <Link
            className={styles.email}
            mb={8}
            textDecoration={"none"}
            href="mailto:dunglevan2001@gmail.com"
          >
            dunglevan2001@gmail.com
          </Link>
        </motion.div>
        <Box height={150} width={0.5} background={"#81e6d9"} zIndex={10}></Box>
      </Box>
    </Box>
  );
};

export default Main;
