"use client";

import { Box, Flex } from "@chakra-ui/react";
import AboutAndFooter from "@env/components/AboutAndFooter";
import AnnouncementBanner from "@env/components/AnnouncementBanner";
import EditorHeader from "@env/components/EditorHeader";
import EnvironmentVariableEditor from "@env/components/EnvironmentVariableEditor";
import RightSideBar from "@env/components/RightSideBar";
import { AppShell } from "@saas-ui/react";

export default function Home() {
  return (
    <AppShell
      navbar={
        <Box as="header">
          <AnnouncementBanner />
          <EditorHeader />
        </Box>
      }
      maxW="container.xl"
      marginX="auto"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap={{ base: "nowrap", md: "wrap" }}
        p={4}
        justifyContent="space-between"
      >
        <EnvironmentVariableEditor />
        <RightSideBar />
      </Flex>
      <AboutAndFooter />
    </AppShell>
  );
}
