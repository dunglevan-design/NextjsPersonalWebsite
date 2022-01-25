import { Box, Container, Heading, Link, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Thumbeasycovid from "../public/images/works/easycovid_eyecatch.svg";
import Thumbeasytinder from "../public/images/works/easytinder_eyecatch.svg";
import Thumbeasychat from "../public/images/works/easychat_eyecatch.svg";
import Thumbeasyrender from "../public/images/works/easyrender_eyecatch.svg";

import Thumbeasycoviddark from "../public/images/works/easycovid_eyecatchdark.svg";
import Thumbeasytinderdark from "../public/images/works/easytinder_eyecatchdark.svg";
import Thumbeasychatdark from "../public/images/works/easychat_eyecatchdark.svg";
import Thumbeasyrenderdark from "../public/images/works/easyrender_eyecatchdark.svg";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
              id="simplercovid"
              title={"SimplerCovid"}
              thumbnail={useColorModeValue(Thumbeasycoviddark, Thumbeasycovid) }
            >
              {" "}
              A fully responsive webapp to track most recent covid-19 data
              updates, with tables, graphs and maps. Built with Reactjs, Django
              backend to solve SIR equations in real time
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="simplerTinder"
              title={"SimplerTinder"}
              thumbnail={useColorModeValue(Thumbeasytinderdark, Thumbeasytinder)}
            >
              {" "}
              A clone mobile version of Tinder with swipe and match
              functionalities. Sharing photos and videos and chatting in real
              time. Built with React Native and react native firebase.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="simplerchat"
              title={"SimplerChat"}
              thumbnail={useColorModeValue(Thumbeasychatdark, Thumbeasychat)}
            >
              {" "}
              A minimal chat application on the web from scratch with bad words
              filtering, push notifications and video calling
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="simplerrenderer"
              title={"SimplerRenderer"}
              thumbnail={useColorModeValue(Thumbeasyrenderdark, Thumbeasyrender)}
            >
              {" "}
              A simple 3D Render engine built from scratch using nothing but C++
              with SDL2 and Maths. Input a object file and a material file,
              renders the scence with added orbit controls and lighting options
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Heading fontSize={20} mb={6} variant={"section-title"}>
          Other Noteworthy Projects
        </Heading>
        <Table variant="simple">
          <TableCaption>
            This includes ongoing projects that I am working on at the moment
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Built with</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Pathfinding Visualizer</Td>
              <Td>Reactjs</Td>
              <Td>
                {" "}
                <Link href="https://dunglevan-design.github.io/Pathfinding-Visualization/">
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td>SnakeJs</Td>
              <Td>Reactjs, Material UI</Td>
              <Td>
                {" "}
                <Link href="https://react-snake.pages.dev/">
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td>Personal portfolio</Td>
              <Td>Nextjs, ChakraUI, Threejs, Framer Motion</Td>
              <Td>
                {" "}
                <Link href="https://github.com/dunglevan-design/NextjsPersonalWebsite">
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Td>
            </Tr>

            <Tr>
              <Td>Football Club manangment app </Td>
              <Td>C#, WindowsForm, Mysql</Td>
              <Td>
                {" "}
                <Link href="https://www.youtube.com/watch?v=SQQy67yXk8g&t=72s">
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export default Projects;
