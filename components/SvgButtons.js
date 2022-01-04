import { Box, LinkBox, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SvgButtonGithub() {
  const fill = useColorModeValue("#000", "#fff")
  return (
    <motion.div whileHover={{ y: -5, color: "#81e6d9" }}>
      <Box mb={8} cursor={"pointer"}>
        <Link href="https://github.com/dunglevan-design">
          <LinkBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={30}
            >
              <title>GitHub</title>
              <path color = {fill} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </LinkBox>
        </Link>
      </Box>
    </motion.div>
  );
}

export function SvgButtonInsta() {
  const fill = useColorModeValue("#000", "#fff")

  return (
    <motion.div whileHover={{ y: -5, color: "#81e6d9" }}>
      <Box mb={8} cursor={"pointer"}>
        <Link href="https://www.instagram.com/dung_le__/">
          <LinkBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={30}
            >
              <title>Instagram</title>
              <rect color = {fill} x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path color = {fill} d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line color = {fill} x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </LinkBox>
        </Link>
      </Box>
    </motion.div>
  );
}

export function SvgButtonLinked() {
  const fill = useColorModeValue("#000", "#fff")

  return (
    <motion.div whileHover={{ y: -5, color: "#81e6d9" }}>
      <Box mb={8} cursor={"pointer"}>
        <Link href="https://www.linkedin.com/in/vandung-le-706ba0194/">
          <LinkBox>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={30}
            >
              <title>LinkedIn</title>
              <path color = {fill} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect color = {fill} x="2" y="9" width="4" height="12"></rect>
              <circle color = {fill} cx="4" cy="4" r="2"></circle>
            </svg>
          </LinkBox>
        </Link>
      </Box>
    </motion.div>
  );
}


