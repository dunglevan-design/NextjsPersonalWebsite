import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage, WorkVideo } from "../../components/project";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout>
    <Container maxW="container.md">
      <Title>
        Covid-19 Tracker <Badge>Web app</Badge>
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
      <WorkImage src="/images/works/easycovid_2.png" alt="easyCovid2" />
      <Box
        display="flex"
        flexDirection={["column", "row"]}
        alignItems={"center"}
        justifyContent="space-evenly"
      >
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/covidtracker_1.mp4?alt=media&token=4e91a101-cd43-4759-937d-a753352b80bd"
          alt="easy-covid-demo"
        />
        <WorkVideo
          src="https://firebasestorage.googleapis.com/v0/b/personalportfolio-af8fa.appspot.com/o/covidtracker_2.mp4?alt=media&token=9856a8dd-29c1-4030-8d6b-1db18e1d6088"
          alt="easy-covid-demo"
        />

       
      </Box>
    </Container>
  </Layout>
);

export default Work;
