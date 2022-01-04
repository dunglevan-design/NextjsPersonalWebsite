import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container maxW="container.md">
      <Title>
        easyCovid <Badge>Web app</Badge>
      </Title>
      <P>
        A fully responsive webapp to track most recent covid-19 data updates,
        with tables, graphs and maps. Front end is built with Reactjs with a
        Django python server as backend to solve the SIR equations.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>URL</Meta>
          <Link href="https://covid-trackerfrontend.pages.dev/">
            https://covid-trackerfrontend.pages.dev/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> 
        <ListItem>
          <Meta>type</Meta>
          <span>Full Stack web app</span>
        </ListItem>
        <ListItem>
          <Meta>Front End</Meta>
          <span>Reactjs, Leaftlet API, Chartjs</span>
        </ListItem>
        <ListItem>
          <Meta>Back End</Meta>
          <span>Python, Django, Scipy</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/easycovid_eyecatch.png" alt="easyCovid" />
    </Container>
  </Layout>
);

export default Work;
