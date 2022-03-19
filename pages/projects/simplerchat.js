import { Badge, Box, Container, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage, WorkVideo } from "../../components/project";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function easychat() {
  return (
    <Layout>
      <Container maxW={"container.md"}>
        <Title>
          Simpler Chat <Badge>Web app</Badge>
        </Title>
        <P>
          A fully responsive chat application on the web from scratch with
          profanity filtering and cleaning, push notifications and group video
          calling using webRTC and the mesh network
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>URL</Meta>
            <Link href="https://chat-b7198.web.app/">
              https://chat-b7198.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>type</Meta>
            <span>Full Stack web app</span>
          </ListItem>
          <ListItem>
            <Meta>Front End</Meta>
            <span>Reactjs, Styled Components, Framer motion</span>
          </ListItem>
          <ListItem>
            <Meta>Back End</Meta>
            <span>
              Firebase firestore, Firebase cloud functions, Firebase security
              rules, Firebase cloud messaging
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/easychat_eyecatch.png" alt="easyChat" />

        <Box
          display="flex"
          flexDirection={["column", "row"]}
          alignItems={"center"}
          justifyContent="space-evenly"
        >
          <WorkVideo
            src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/chat_1.mp4?alt=media&token=b4702010-82ba-4a86-87a5-3ab7d94fd3f8"
            alt="easy-covid-demo"
          />
        </Box>
      </Container>
    </Layout>
  );
}

export default easychat;
