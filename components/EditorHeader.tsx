import { Box, Button, Text } from "@chakra-ui/react";
import { useAppContext } from "@env/contexts/AppContext";
import { Field, Form, FormLayout } from "@saas-ui/react";
import React, { useState } from "react";

function EditorHeader() {
  const { state, updateConfig } = useAppContext();
  const isLightTheme = state.config.darkMode;

  const handleThemeToggle = () => {
    const newConfig = {
      darkMode: !state.config.darkMode,
    };
    updateConfig(newConfig);
  };

  return (
    <Box display="flex" justifyContent="space-between" width="full" px={4}>
      <Box>
        <Text fontSize="lg" fontWeight="semibold" marginBottom="4">
          Environment Variables Sorter
        </Text>
        <Text>Your environment variables should be as clean as your code.</Text>
      </Box>
      <Form
        onSubmit={handleThemeToggle}
        defaultValues={{ theme: isLightTheme }}
      >
        <FormLayout>
          <Field type="switch" name="theme" label="Dark mode" />
        </FormLayout>
      </Form>
    </Box>
  );
}

export default EditorHeader;
