import React from "react";
import { Box, HStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import restaurantFood from "../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

const LandingSection = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/booking");
  }
  return (
    <HStack p={20} marginTop="1.5rem" backgroundColor="#495e57">
      <Box w="100%" height="15rem" display="flex" alignItems="flex-start">
        <Box color="#ffffff">
          <Heading as="h1" id="home" color="#F4CE14" fontSize="45px">
            Little Lemon
          </Heading>{" "}
          <Heading as="h3" m={0} fontSize="30px">
            Chicago
          </Heading>
          <Text maxWidth="15rem" marginTop="1.8rem" id="about">
            We are a Family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
          <Button
            type="button"
            marginTop="0.8rem"
            backgroundColor="#F4CE14"
            color="#000"
            fontWeight="bold"
            onClick={handleClick}
          >
            Reserve a table
          </Button>
        </Box>
        <Box>
          <Image
            borderRadius="16px"
            marginLeft="15rem"
            marginTop="2rem"
            width="14.5rem"
            src={restaurantFood}
            alt="restaurantfoods"
          />
        </Box>
      </Box>
    </HStack>
  );
};

export default LandingSection;
