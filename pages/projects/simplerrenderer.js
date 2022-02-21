import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage, WorkVideo } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container maxW="container.md">
      <Title>
        SimplerRenderer <Badge>Command Line App</Badge>
      </Title>
      <P>
        A simple 3D Render engine built from scratch using nothing but C++ with
        SDL2 and Maths. The program reads an object file in obj format, and an
        optional material file in mtl format and renders the scence with added
        orbit controls and lighting/shadow options.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://github.com/dunglevan-design/SimpleRenderer">
          https://github.com/dunglevan-design/SimpleRenderer{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
                
        <ListItem>
          <Meta>Functionalities</Meta>
          <span>Proximity lightings, Rasterization, Raytracing, TextureMapping, Orbits</span>
        </ListItem>
        <ListItem>
          <Meta>Programming language</Meta>
          <span>C++</span>
        </ListItem>        <ListItem>
          <Meta>Libraries</Meta>
          <span>GLM, SDL2</span>
        </ListItem>
      </List>
      <WorkImage src="https://firebasestorage.googleapis.com/v0/b/simplerenderer.appspot.com/o/lightingrotated.png?alt=media&token=e45f882e-c917-42e1-9f2e-1b6f488f299b" alt="simpler render 1" />
      <WorkImage src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/renderer.jpg?alt=media&token=b3d738c1-2301-430c-84eb-59cc62c82f93" alt="simpler render 2" />
    </Container>
  </Layout>
);

export default Work;
