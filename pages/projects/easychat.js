import { Badge, Container, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Layout from "../../components/layouts/article";
import { Meta, Title, WorkImage } from "../../components/project";
import P from "../../components/paragraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function easychat() {
  return (
    <Layout>
      <Container>
        <Title>
          easyChat <Badge>Web app</Badge>
        </Title>
        <P>
          A fully responsive chat application on the web from scratch with bad
          words filtering, push notifications and group video calling with
          webRTC and the mesh network
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>URL</Meta>
            <Link href="https://chat-b7198.web.app/">
            https://chat-b7198.web.app/{" "}
              <ExternalLinkIcon mx="2px" />
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
            <span>Firebase firestore, Firebase cloud functions, Firebase security rules, Firebase cloud messaging</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/easychat_eyecatch.png" alt="easyChat" />
        <WorkImage src="/images/works/easychat_1.png" alt="easyChat" />
      </Container>
    </Layout>
  );
}

export default easychat;
