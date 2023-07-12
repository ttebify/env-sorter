"use client"

import AboutAndFooter from "@env/components/AboutAndFooter";
import EditorHeader from "@env/components/EditorHeader";
import EnvironmentVariableEditor from "@env/components/EnvironmentVariableEditor";
import RightSideBar from "@env/components/RightSideBar";
import { AppProvider } from "@env/contexts/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <main className="flex min-h-screen flex-col items-center max-w-screen-xl p-4 md:p-24 !pb-0 mx-auto">
        <EditorHeader />
        <div className="my-12 flex flex-col md:flex-row justify-between w-full">
          <EnvironmentVariableEditor />
          <RightSideBar />
        </div>
      </main>
      <AboutAndFooter />
    </AppProvider>
  );
}
