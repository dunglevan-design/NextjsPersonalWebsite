import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Thumbeasycovid from "../public/images/works/easycovid_eyecatch.png";
import Thumbeasytinder from "../public/images/works/easytinder_eyecatch.png";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* delays */}
          <Section>
            <WorkGridItem
              id="easycovid"
              title={"easyCovid"}
              thumbnail={Thumbeasycovid}
            >
              {" "}
              A fully responsive webapp to track most recent covid-19 data
              updates, with tables, graphs and maps. Front end is built with
              Reactjs with a Django python server as backend to solve the SIR
              equations.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="easyTinder"
              title={"easyTinder"}
              thumbnail={Thumbeasytinder}
            >
              {" "}
              A mix between the swipe and match functionality of tinder and the
              video sharing ideas of Tiktok with fully functioning chat features
              including push notifications and sharing images and videos
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
