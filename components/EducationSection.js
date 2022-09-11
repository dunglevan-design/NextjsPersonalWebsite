import React from "react";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme,
} from "@merc/react-timeline";
import { useColorModeValue } from "@chakra-ui/react";

export const EducationSection = () => {
  const textcolor = useColorModeValue("#000", "#fff");
  const datecolor = useColorModeValue("#fff", "#000");
  const Background = useColorModeValue("#2c7a7b", "#88ccca");
  const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: "none",
      color: textcolor,
    },
    date: {
      backgroundColor: Background,
      color: datecolor,
    },
    marker: {
      borderColor: Background,
    },
    timelineTrack: {
      backgroundColor: Background,
    },
  });
  return (
    <Timeline theme={customTheme}>
      <Events>
        <TextEvent
          date="09/2017 - 2019"
          text="**Brockenhust College** <br/><br/>Computer Science, Maths, Further Maths, Economics"
        />
        <TextEvent
          date="09/2019 - 06/2022"
          text="**University of Bristol**<br/><br/>Bachelors of Science, Maths and Computer Science"
        />
        <TextEvent 
          date="08/2022 - now"
          text="**Acturis**<br/><br/>Software Developer"
        />
      </Events>
    </Timeline>
  );
};
