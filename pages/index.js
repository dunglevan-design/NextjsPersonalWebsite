import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon, TriangleUpIcon } from "@chakra-ui/icons";
import WorkSection, { BulletPoint } from "../components/WorkSection";
import { motion } from "framer-motion";
import Layout from "../components/layouts/article";
import ContactForm from "../components/ContactForm";
import { EducationSection } from "../components/EducationSection";
export default function Page() {
  return (
    <Layout>
      <Container maxW={"container.md"}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a full stack developer from London
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jun Le
            </Heading>
            <p>C#.Net Core, C++, Javascript/Typescript, Reactjs, React Native, Koitlin Android</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              src="/images/junle.jpg"
              borderWidth={2}
              borderStyle="solid"
              height={100}
              width={100}
              fit="cover"
              display="inline-block"
              borderRadius="100%"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Hello! I am Jun. I am a full-time software developer. I am passionate about building and learning. 
            I have a knack for all things from planning and building, to testing
            and deploying programs. Here are a few technologies I have been working with
            recently:
          </Paragraph>

          <Flex
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-around"}
            py={6}
            px={3}
          >
            <BulletPointTech text="C# .Net Core" />
            <BulletPointTech text="C++" />
            <BulletPointTech text="Typescript" />
            <BulletPointTech text="Reactjs" />
            <BulletPointTech text="Koitlin Android" />
            <BulletPointTech text="React Native" />
          </Flex>

          <Paragraph>
            When not online, I ♥ hanging out with friends and playing the guitar
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.5}>
          <EducationSection />
        </Section>

        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            Where I've worked
          </Heading>
          <WorkSection></WorkSection>
        </Section>


        <Section delay={1}>
          <Heading as="h3" variant="section-title">
            Get in touch
          </Heading>

          <Paragraph>
            I'm not currently looking for a position. However, my inbox is always
            open, whether you want to collaborate on
            a project or just want to say hi !
          </Paragraph>

          <ContactForm />
        </Section>
      </Container>
    </Layout>
  );
}

const BulletPointTech = ({ text }) => (
  <Box alignItems={"center"} justifyContent={"center"} width={"30%"} mb={3}>
    <TriangleUpIcon
      color={"#4fd1c5"}
      transform={"rotate(90deg)"}
      w={3}
      h={3}
      mb={1}
      mr={2}
    />
    {text}
  </Box>
);
