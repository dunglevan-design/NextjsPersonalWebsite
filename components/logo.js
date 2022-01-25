import Link from "next/link";
import Image from "next/image";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const AnimatedBox = motion(Box);
const AnimatedText = motion(Text);
const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue("", "-dark")}.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <AnimatedBox
            width={10}
            height={10}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 4.1 }}
          >
            <Image
              src={footPrintImg}
              width={"100%"}
              height={"100%"}
              alt="logo"
            ></Image>
          </AnimatedBox>
          <AnimatedText
            color={useColorModeValue("gray.800", "WhiteAlpha.900")}
            fontFamily={"M PLUS Rounded 1c"}
            fontWeight="bold"
            ml={3}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.4 }}
          >
            Jun Le
          </AnimatedText>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
