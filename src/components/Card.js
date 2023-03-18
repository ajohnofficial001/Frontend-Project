import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { MdDeliveryDining } from "react-icons/md";
import React from "react";

const Card = ({ title, description, imageSrc, amount }) => {
  return (
    <VStack backgroundColor="#edefee" borderRadius="lg">
      <Image
        src={imageSrc}
        alt={title}
        height="15rem"
        width="100%"
        borderRadius="lg"
        border
      />
      <VStack textAlign="start" p="4" color="black" mt="6" spacing="3">
        <HStack display="flex" alignItems="start">
          <Heading marginRight="8rem" size="md">
            {title}
          </Heading>
          <Text color="#ee9972">${amount}</Text>
        </HStack>
        <Text>{description}</Text>
        <HStack fontWeight="bold" fontSize="lg" display="flex" marginTop="2rem">
          <p>Order a delivery</p>
          <MdDeliveryDining p={10} m={5} marginLeft="10px" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
