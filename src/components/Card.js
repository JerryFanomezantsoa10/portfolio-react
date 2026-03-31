import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (<VStack
      align="start"
      spacing={0}
      bg="white"
      color="black"
      borderRadius="2xl"
      overflow="hidden"
      maxW="420px"
    >
      <Image
        src={imageSrc}
        alt="React Space"
        w="100%"
        h="260px"
        objectFit="cover"
      />

      <VStack align="start" spacing={6} p={6} w="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text fontSize="lg">
          {description}
        </Text>

        <HStack spacing={3}>
          <Text fontWeight="medium">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>)
};

export default Card;
