import { Badge, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { useState } from "react";
import { BooleanKeyframeTrack } from "three";
import { TriangleUpIcon } from "@chakra-ui/icons";

const data = [
  {
    title: "Web Developer intern",
    year: "May - September 2021",
    bulletpoints: [
      "Worked with a team of 5, including UI/UX designers to build and maintain an e-commerce platform selling online financial courses, primarily using HTML, CSS, Less, Javascript, PHP",
      "Implemented Oauth2 in Nodejs to allow authentication with Singpass{API}",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
    ],
  },
  {
    title: "Software Enginner Co-op",
    year: "September 2020 - May 2021",
    bulletpoints: [
      "Collaborated with a small team to build consolidation tool to pull together animals' movement data reports, providing a consistent, clean set of data for easier analysist work for the client, the front-end is built with Reactjs and the backend with Java",
      "Implemented Spring Web MVC framework to build secured HTTPs endpoints and interact with databases and storage",
      "Integrated CircleCI for continuous integration and Docker for seemless deployment onto AmazonEC2",
      "Worked closely with the clients for frequent catchups and requirement updates",
    ],
  },
  {
    title: "Beverage server/preparer",
    year: "2019",
    bulletpoints: [
      "Preparing, serving beverages to customers, authorising their transaction, listening to customers’ problems and answering their questions about menu items",
      "Breaking plates, spilling drinks and getting scolded by the store manager",
    ],
  },
];
const StyledDiv = chakra(
  styled.div((props) => ({
    backgroundColor: props.active ? "rgba(255, 255, 255, 0.08)" : "",
    color: props.active ? "#4fd1c5" : "",
    transition: "all 0.4s linear",
  })),
  {
    baseStyle: {
      px: 3,
      py: 2,
      cursor: "pointer",
    },
  }
);

const Container = chakra(
  styled.div((props) => ({
    marginRight: "10%",
    display: "flex",
    paddingTop: 20,
  })),
  {}
);

const MotionDiv = chakra(motion.div);

const WorkSection = () => {
  const [active, setActive] = useState([true, false, false]);

  const showActive = (index) => {
    setActive((previousActive) => {
      const newActive = previousActive.map((e, i) => i === index);
      return newActive;
    });
  };
  return (
    <Flex flexDirection={"row"} width={"100%"}>
      <Container flexDirection={"column"} flexGrow={1}>
        <StyledDiv
          _hover={{ bg: "whiteAlpha.200" }}
          active={active[0] ? 1 : 0}
          onClick={() => showActive(0)}
        >
          <Text>CFTE</Text>
        </StyledDiv>
        <StyledDiv
          _hover={{ bg: "whiteAlpha.200" }}
          active={active[1] ? 1 : 0}
          onClick={() => showActive(1)}
        >
          <Text>Defra / APHA</Text>
        </StyledDiv>
        <StyledDiv
          _hover={{ bg: "whiteAlpha.200" }}
          active={active[2] ? 1 : 0}
          onClick={() => showActive(2)}
        >
          <Text>Chatime</Text>
        </StyledDiv>
      </Container>

      {active[0] && (
        <MotionDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={"all 0.4s ease-out"}
          flexGrow={3}
        >
          <Heading as="h3" fontSize={20}>
            {data[0].title}
          </Heading>
          <Badge>{data[0].year}</Badge>
          <BulletPoint text={data[0].bulletpoints[0]} />
          <BulletPoint text={data[0].bulletpoints[1]} />
          <BulletPoint text={data[0].bulletpoints[2]} />
        </MotionDiv>
      )}

      {active[1] && (
        <MotionDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={"all 0.4s ease-out"}
          flexGrow={3}
        >
          <Heading as="h3" fontSize={20}>
            {data[1].title}
          </Heading>
          <Badge>{data[1].year}</Badge>

          <BulletPoint text={data[1].bulletpoints[0]} />
          <BulletPoint text={data[1].bulletpoints[1]} />
          <BulletPoint text={data[1].bulletpoints[2]} />
          <BulletPoint text={data[1].bulletpoints[3]} />
        </MotionDiv>
      )}

      {active[2] && (
        <MotionDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={"all 0.4s ease-out"}
          flexGrow={3}
        >
          <Heading as="h3" fontSize={20}>
            {data[2].title}
          </Heading>
          <Badge>{data[2].year}</Badge>

          <BulletPoint text={data[2].bulletpoints[0]} />
          <BulletPoint text={data[2].bulletpoints[1]} />
        </MotionDiv>
      )}
    </Flex>
  );
};

export const BulletPoint = ({ text }) => (
  <Text as="p" width={"100%"} display={"flex"} mb={3}>
    <TriangleUpIcon
      color={"#4fd1c5"}
      transform={"rotate(90deg)"}
      w={3}
      h={3}
      mt={1.5}
      mr={3}
    />
    {text}
  </Text>
);

export default WorkSection;
