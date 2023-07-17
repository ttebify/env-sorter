import { Box, Heading, Text, Link, Flex } from "@chakra-ui/react";

function AboutAndFooter() {
  return (
    <Box bg="gray.100" py="8" px="4" width="full">
      <Box maxW="container.md" mx="auto">
        <Box textAlign="center">
          <Heading as="h2" fontSize="3xl" fontWeight="bold" mb="4">
            Environment Variable Sorter
          </Heading>
          <Text fontSize="lg" color="gray.700" mb="8">
            Your environment variables should be as clean as your code.
          </Text>
          <Text fontSize="lg" color="gray.700" mb="8">
            Group related environment variables, add comments, and apply filters
            to enhance readability and organization.
          </Text>
          <Text fontSize="lg" color="gray.700" mb="8">
            Check out the project on
            <Link
              href="https://github.com/ttebify/env-sorter"
              color="blue.500"
              textDecoration="underline"
              ml="1"
              isExternal
            >
              GitHub
            </Link>
            .
          </Text>
          <Flex justifyContent="center">
            <Link
              href="https://github.com/ttebify"
              color="blue.500"
              mx="2"
              isExternal
            >
              GitHub
            </Link>
            <Link
              href="https://twitter.com/ttebify"
              color="blue.500"
              mx="2"
              isExternal
            >
              Twitter
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutAndFooter;
