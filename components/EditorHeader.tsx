import { useAppContext } from "@env/contexts/AppContext";
import React, { useState } from "react";

function EditorHeader() {
  const { state, updateConfig } = useAppContext();
  const isLightTheme = state.config.darkMode ? false : true;

  const handleThemeToggle = () => {
    const newConfig = {
      darkMode: !state.config.darkMode,
    };
    updateConfig(newConfig);
  };

  return (
    <div className="flex justify-between w-full">
      <div>
        <p>
          <span className="text-sm">from</span>&nbsp;
          <span className="text-gray-500">Ttebify</span>
        </p>
        <p className="text-lg font-semibold mb-4">
          Environment Variables Sorter
        </p>
        <p>Your environment variables should be as clean as your code.</p>
      </div>
      <button
        className={`bg-gray-200 rounded-full w-12 h-6 flex items-center justify-${
          isLightTheme ? "start" : "end"
        } transition-colors duration-300`}
        onClick={handleThemeToggle}
      >
        <span
          className={`bg-white rounded-full w-4 h-4 ${
            isLightTheme ? "ml-1" : "mr-1"
          } transition-transform duration-300 transform`}
        ></span>
      </button>
    </div>
  );
}

export default EditorHeader;
