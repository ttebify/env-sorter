import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Text,
  type ToastPosition,
  useDisclosure,
} from "@chakra-ui/react";
import CommentsConfigModal from "./CommentsConfigModal";
import { useAppContext } from "@env/contexts/AppContext";
import { useSnackbar } from "@saas-ui/react";

function RightSideBar() {
  const { state } = useAppContext();
  const snackbar = useSnackbar();
  const disclosure = useDisclosure();

  const customSchemaItems = state.config.commentSchema;

  const handleExportClick = (format: string) => {
    const position: ToastPosition = "bottom-right";

    snackbar.promise(
      new Promise<void>((resolve, reject) => {
        exportVariables(format)
          .then(resolve)
          .catch((error) => {
            reject(error);
          });
      }),
      {
        loading: {
          title: `Exporting ${format} variables...`,
          position,
        },
        success: {
          title: `Exported ${format} variables successfully.`,
          position,
          isClosable: true,
        },
        error: (error) => ({
          title: `Failed to export ${format} variables: ${error.message}`,
          position,
          action: <Button variant="subtle">Retry</Button>,
        }),
      }
    );
  };

  const exportVariables = (format: string) => {
    // Simulate the export process
    return new Promise<void>((resolve, reject) => {
      // Perform the export operation here
      setTimeout(() => {
        resolve();
        // reject(new Error("Export failed")); // Uncomment to simulate a failed export
      }, 2000);
    });
  };

  return (
    <Box>
      <Flex flex="1" flexDirection="column" w="full" alignItems="flex-end">
        <Flex flexDirection="column" alignItems="flex-end">
          <Text fontSize="xl" mb="4">
            Export variables
          </Text>
          <Flex gap="4">
            <Button
              flex="1"
              w="20"
              h="20"
              bg="white"
              _hover={{ bg: "gray.100" }}
              shadow="md"
              rounded="lg"
              py="2"
              px="4"
              transition="duration.300"
              onClick={() => handleExportClick(".env")}
            >
              .env
            </Button>
            <Button
              flex="1"
              w="20"
              h="20"
              bg="white"
              _hover={{ bg: "gray.100" }}
              shadow="md"
              rounded="lg"
              py="2"
              px="4"
              transition="duration.300"
              onClick={() => handleExportClick("JSON")}
            >
              JSON
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems="center" my={4} justify="end">
          <FormLabel htmlFor="addCommentsCheckbox">Add comments</FormLabel>
          <Checkbox
            id="addCommentsCheckbox"
            mr="2"
            size="lg"
            colorScheme="blue"
          />
        </Flex>

        <Flex
          direction="column"
          p="4"
          bg="white"
          rounded="lg"
          shadow="md"
          mb="4"
          w="full"
        >
          <Text fontSize="lg" fontWeight="bold" mb="2">
            Defined custom schema
          </Text>
          <Text fontSize="sm" fontWeight="semibold" mb="4" color="gray.500">
            {customSchemaItems.length}/23
          </Text>
          <Box overflowY="auto" maxHeight={128} marginBottom={2}>
            {customSchemaItems.map((item) => (
              <Flex key={item.id} alignItems="center" mb={2}>
                <Text fontWeight="bold">{item.searchPattern}</Text>
                <Text color="gray.400" mx="1">
                  /
                </Text>
                <Text color="gray.500">{item.comment}</Text>
              </Flex>
            ))}
          </Box>
          <Button
            onClick={disclosure.onOpen}
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            color="white"
            fontWeight="bold"
            py="2"
            px="4"
            rounded="md"
          >
            Define Schema
          </Button>
        </Flex>
      </Flex>
      <CommentsConfigModal {...disclosure} />
    </Box>
  );
}

export default RightSideBar;
