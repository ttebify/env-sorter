import React, { useEffect, useState } from "react";
import SortingContainer from "./SortingContainer";
import { useAppContext } from "@env/contexts/AppContext";
import { parseEnvVariables } from "@env/utils/parseEnvVariable";
import { Box, Button, Textarea } from "@chakra-ui/react";
import { LoadingOverlay, LoadingSpinner } from "@saas-ui/react";

function EnvironmentVariableEditor() {
  const { updateEnvVariables } = useAppContext();
  const [rawEnvVariables, setRawEnvVariables] = useState<string>("");
  const [formating, setFormating] = useState(false);

  /*   useEffect(() => {
    const formattedVariables = formatEnvVariables(state.envVariables, {
      groups: state.envVariablesGroups,
    });

    setRawEnvVariables(formattedVariables);
  }, [state.envVariables, state.envVariablesGroups]); */

  useEffect(() => {
    // TODO: Add debounce
    const extractedVariables = parseEnvVariables(rawEnvVariables);
    updateEnvVariables(extractedVariables);
  }, [rawEnvVariables]);

  useEffect(() => {
    if (formating) {
      setTimeout(() => {
        setFormating(false);
      }, 1000);
    }
  }, [formating]);

  const handleEnvVariablesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newEnvVariables = event.target.value;
    setRawEnvVariables(newEnvVariables);
  };

  return (
    <Box maxW="3xl" width="full" flex={2} py={10}>
      <SortingContainer />
      <Box position="relative">
        <Textarea
          width="full"
          height="calc(100vh - 200px)"
          maxH="72"
          mt="8"
          border="1px"
          focusBorderColor="blue.500"
          rounded="lg"
          p="2"
          mb="4"
          placeholder="Enter environment variables here"
          value={rawEnvVariables}
          onChange={handleEnvVariablesChange}
        />
        <LoadingOverlay variant="overlay" isLoading={formating}>
          <LoadingSpinner size="lg" color="blue.500" thickness="4px" />
        </LoadingOverlay>
      </Box>
      <Box display="flex">
        <Button
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
          mr="4"
          onClick={() => setFormating(true)}
        >
          Format
        </Button>
        <Button
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
        >
          Copy
        </Button>
      </Box>
    </Box>
  );
}

export default EnvironmentVariableEditor;
