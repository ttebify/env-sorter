import { Button, Flex } from "@chakra-ui/react";
import React from "react";

function SortingContainer() {
  const handleSortAZ = () => {
    // Sorting logic for A-Z sorting
    // Update the environment variables in the context
    // Replace the following line with your actual update logic
    console.log("Sorted A-Z:");
  };

  const handleSortZA = () => {
    // Sorting logic for Z-A sorting
    // Update the environment variables in the context

    // Replace the following line with your actual update logic
    console.log("Sorted Z-A:");
  };

  return (
    <Flex shadow="md" rounded="md" border="1px" px="2">
      <Button
        bg="white"
        _hover={{ bg: "gray.100" }}
        color="gray.700"
        fontWeight="semibold"
        py="2"
        px="4"
        roundedLeft="md"
        onClick={handleSortAZ}
      >
        Sort A-Z
      </Button>
      <Button
        bg="white"
        _hover={{ bg: "gray.100" }}
        color="gray.700"
        fontWeight="semibold"
        py="2"
        px="4"
        onClick={handleSortZA}
      >
        Sort Z-A
      </Button>
    </Flex>
  );
}

export default SortingContainer;
