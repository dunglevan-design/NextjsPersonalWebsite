import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import WorkSection from "../components/WorkSection";
import { motion } from "framer-motion";
import Layout from "../components/layouts/article";
import ContactForm from "../components/ContactForm";
export default function Page() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I'm a full stack devloper from Bristol
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jun Le
            </Heading>
            <p>Javascript/Typescript, Firebase</p>
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
            Lorem ipsum dolor sit amet. Et reiciendis optio sit tenetur
            voluptatum id nostrum sunt sit repudiandae neque quo corporis
            blanditiis vel laborum galisum. Aut alias rerum ab omnis voluptas
            aut totam quia et facere accusantium quo beatae internos et deserunt
            vero. Have a look at what I have built:{" "}
            <NextLink href="/projects/easynote">
              <Link>easyNote</Link>
            </NextLink>
            ,{" "}
            <NextLink href="/projects/easyspotify">
              <Link>easySpotify</Link>
            </NextLink>
            ,{" "}
            <NextLink href="/projects/easytinder">
              <Link>easyTinder</Link>
            </NextLink>
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <WorkSection></WorkSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Get in touch
          </Heading>

          <Paragraph>
            I’m currently looking for new opportunities. My inbox is always
            open, whether you have a position available, want to collaborate on
            a project or just want to say hi !
          </Paragraph>

          <ContactForm />
       
        </Section>
      </Container>
    </Layout>
  );
}
