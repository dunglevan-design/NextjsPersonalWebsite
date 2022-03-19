import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage, WorkVideo } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container maxW="container.md">
      <Title>
        Tinder Clone <Badge>Mobile App</Badge>
      </Title>
      <P>
        A clone mobile version of Tinder with swipe and match functionalities.
        Sharing photos and videos and chatting in real time. Built with React
        Native and react native firebase.
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
      <Box
        display="flex"
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent="space-evenly"
      >
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/tinder_1.mp4?alt=media&token=fbce61c7-d82f-4c56-91c7-c40123687001"
          alt="easyTinderdemo"
        />
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/tinder_2.mp4?alt=media&token=e1c4ee31-944b-469e-9308-4e925230ab99"
          alt="easyTinderdemo"
        />
      </Box>
    </Container>
  </Layout>
);

export default Work;
