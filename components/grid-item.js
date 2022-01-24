import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { motion } from "framer-motion";

export const GridItem = ({ children, href, title, thumbnail }) => {
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>;
};

const MotionBox = motion(Box);

const MotionText = motion(Text);

const contentVariants = {
  hidden: {
    y: "20%",
    opacity: 1,
  },
  hover: {
    y: 0,
    opacity: 1,
  },
};
const descriptionVariants = {
  hidden: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
};

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`projects/${id}`}>
      <LinkBox
        cursor="pointer"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        py={15}
        px={5}
        height={350}
        borderRadius={10}
        overflow={"hidden"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <MotionBox
          initial="hidden"
          variants={contentVariants}
          whileHover="hover"
          transition={{
            ease: [0.5, 0, 0, 1],
            duration: 0.8,
            delayChildren: 0.3,
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            // placeholder="blur"
            width={250}
            height={150}
          />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={2} fontSize={20} mb={15} fontWeight={600}>
              {title}
            </Text>
          </LinkOverlay>

          <MotionText variants={descriptionVariants} fontSize={14}>
            {children}
          </MotionText>
        </MotionBox>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail{
          border-radius: 12px;
        }
      `}
  />
);
