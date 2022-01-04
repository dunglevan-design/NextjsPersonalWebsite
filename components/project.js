import Nextlink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import styles from "../styles/smartphone.module.css";

export const Title = ({ children }) => (
  <Box>
    <Nextlink href="/projects">
      <Link>Projects</Link>
    </Nextlink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}></Image>
);

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);

const Styledvideo = styled.video`
`;

export const WorkVideo = ({ src, alt }) => (
  <div className={styles.smartphone}>
    <Styledvideo autoPlay loop muted>
      <source src={src} alt={alt} type="video/mp4" />
    </Styledvideo>
  </div>
);
