import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Button } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Greek Salad",
    id: 1,
    amount: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("../assets/greek salad.jpg"),
  },
  {
    title: "Bruchetta",
    id: 2,
    amount: 5.99,
    description:
      "Our Bruchetta is made of grilled bread that has been smeared with garlic and seasoned salt and olive oil.",
    getImageSrc: () => require("../assets/images.jpg"),
  },
  {
    title: "Lemon Dessert",
    id: 3,
    amount: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and it is as authentic as can be imagined.",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
  },
];

const MealSpecial = () => {
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      marginTop="4.5rem"
    >
      <Box display="flex" flexDirection="center" justifyContent="space-between">
        <Heading as="h1" id="projects-section" color="black" fontSize="40px">
          This weeks specials
        </Heading>
        <Button
          type="button"
          color="black"
          backgroundColor="#F4CE14"
          marginLeft="28rem"
        >
          Online Menu
        </Button>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            imageSrc={project.getImageSrc()}
            title={project.title}
            description={project.description}
            amount={project.amount}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default MealSpecial;
