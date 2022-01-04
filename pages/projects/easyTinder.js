import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage, WorkVideo } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container maxW="container.md">
      <Title>
        easyTinder <Badge>Mobile App</Badge>
      </Title>
      <P>
        A mix between the swipe and match functionality of tinder and the video
        sharing ideas of Tiktok with fully functioning chat features
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/dunglevan-design/worseTinder">
            https://github.com/dunglevan-design/worseTinder{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>type</Meta>
          <span>Mobile App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, Bare React Native, Firebase</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/easytinder_eyecatch.png" alt="Inkdrop" />
      <Box display ="flex" flexDirection={"row"} alignItems={"center"} justifyContent="space-evenly">
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/bettertinder-4ff52.appspot.com/o/worsetinder.mp4?alt=media&token=685e53f2-cd03-477b-962e-e3686b45439e"
          alt="easyTinderdemo"
        />
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/bettertinder-4ff52.appspot.com/o/worsetinder.mp4?alt=media&token=685e53f2-cd03-477b-962e-e3686b45439e"
          alt="easyTinderdemo"
        />
      </Box>
    </Container>
  </Layout>
);

export default Work;
