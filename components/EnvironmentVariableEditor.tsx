import React, { useState } from "react";
import SortingContainer from "./SortingContainer";
import { useAppContext } from "@env/contexts/AppContext";

function EnvironmentVariableEditor() {
  const { state, updateEnvVariables } = useAppContext();
  const [envVariables, setEnvVariables] = useState(state.envVariables);

  const handleEnvVariablesChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newEnvVariables = event.target.value;
    setEnvVariables(newEnvVariables);

    // TODO: Add debounce functionality
    updateEnvVariables(newEnvVariables);
  };

  return (
    <div className="max-w-3xl w-full flex-[2]">
      <SortingContainer />
      <textarea
        className="w-full h-[calc(100vh-200px)] max-h-96 my-8 border focus:border-blue-500 rounded-lg p-2 mb-4 resize-none"
        placeholder="Enter environment variables here"
        value={envVariables}
        onChange={handleEnvVariablesChange}
      ></textarea>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
          Format
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Copy
        </button>
      </div>
    </div>
  );
}

export default EnvironmentVariableEditor;
