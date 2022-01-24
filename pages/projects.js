import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Thumbeasycovid from "../public/images/works/easycovid_eyecatch.svg";
import Thumbeasytinder from "../public/images/works/easytinder_eyecatch.svg";
import Thumbeasychat from "../public/images/works/easychat_eyecatch.svg";
import Thumbeasyrender from "../public/images/works/easyrender_eyecatch.svg";

const Projects = () => {
  return (
    <Layout>
      <Container maxW={"container.md"}>
          <Heading as="h3" fontSize={20} mb={6} variant={"section-title"}>
            Projects
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} gap={[6, 6, 15]}>
            {/* delays */}
            <Section>
              <WorkGridItem
                id="easycovid"
                title={"SimplerCovid"}
                thumbnail={Thumbeasycovid}
              >
                {" "}
                A fully responsive webapp to track most recent covid-19 data
                updates, with tables, graphs and maps. Built with
              Reactjs, Django backend to solve SIR equations in real time
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                id="easyTinder"
                title={"SimplerTinder"}
                thumbnail={Thumbeasytinder}
              >
                {" "}
                A clone mobile version of Tinder with swipe and match
                functionalities. Sharing photos and videos and chatting in real
                time. Built with React Native and react native firebase.
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                id="easychat"
                title={"SimplerChat"}
                thumbnail={Thumbeasychat}
              >
                {" "}
                A minimal chat application on the web from scratch with bad
                words filtering, push notifications and video calling
              </WorkGridItem>
            </Section>

            <Section>
              <WorkGridItem
                id="easychat"
                title={"SimplerRenderer"}
                thumbnail={Thumbeasyrender}
              >
                {" "}
                A minimal chat application on the web from scratch with bad
                words filtering, push notifications and video calling
              </WorkGridItem>
            </Section>
          </SimpleGrid>

          <Heading fontSize={20} mb={6} variant={"section-title"}>Other Projects</Heading>
      </Container>
    </Layout>
  );
};

export default Projects;
