import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

function ContactForm() {
  return (
    <Container mt={12}>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <Flex justifyContent={"space-between"}>
        <FormControl width={"45%"}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" />
        </FormControl>

        <FormControl width={"45%"}>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input id="subject" type="text" />
        </FormControl>
      </Flex>

      <FormControl>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea id="message" type="textarea" name="message" />
      </FormControl>

      <Box align="center">
        <FormControl mt={6}>
          <Button type="submit" colorScheme={"teal"}>
            Say Hello !
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default ContactForm;
