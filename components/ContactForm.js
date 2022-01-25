import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Paragraph from "./paragraph";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [SystemMessage, setSystemMessage] = useState("");

  async function SubmitContact(e) {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
      subject: subject,
      message: message,
    };
    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response.status);
      if (response.status == 200) {
        setSystemMessage(
          "I have received the message and will get  back to you ASAP 👌"
        );
      } else
        setSystemMessage(
          "An error has occured on the server😢, please use the mailbox instead or contact me via LinkedIn"
        );
    } catch (error) {
      setSystemMessage(
        "An error has occured 😢, please use the mailbox instead or contact me via LinkedIn"
      );
    }
  }

  return (
    <Container mt={12}>
      <form onSubmit={(e) => SubmitContact(e)}>
        <FormControl isRequired>
          <FormLabel id="emaillabel" htmlFor="email">
            Email address
          </FormLabel>
          <Input
            variant={"filled"}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </FormControl>

        <Flex justifyContent={"space-between"}>
          <FormControl width={"45%"}>
            <FormLabel id="namelabel" htmlFor="name">
              Name
            </FormLabel>
            <Input
              variant={"filled"}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </FormControl>

          <FormControl width={"45%"}>
            <FormLabel id="subjectlabel" htmlFor="subject">
              Subject
            </FormLabel>
            <Input
              variant={"filled"}
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
          </FormControl>
        </Flex>

        <FormControl isRequired>
          <FormLabel id="messagelabel" htmlFor="message">
            Message
          </FormLabel>
          <Textarea
            variant="filled"
            id="message"
            type="textarea"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </FormControl>

        <Box align="center">
          <FormControl mt={6}>
            <Button type="submit" colorScheme={"teal"}>
              Say Hello !
            </Button>
          </FormControl>
        </Box>
      </form>
      <Text textAlign={"center"} mt={6}>{SystemMessage}</Text>
    </Container>
  );
}

export default ContactForm;
