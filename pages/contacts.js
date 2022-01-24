import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/layouts/article";
import Paragraph from "../components/paragraph";

function contacts() {
  return (
    <Layout>
      <Container>
        <Heading as="h3">Get in touch</Heading>
        <Paragraph>
          {" "}
          I’m currently looking for new opportunities. My inbox is always open,
          whether you have a position available, want to collaborate on a
          project or just want to say hi !
        </Paragraph>
        <ContactForm />
      </Container>
    </Layout>
  );
}

export default contacts;
