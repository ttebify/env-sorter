import {
  customSchemaItems,
  environmentVariables,
  environmentVariablesGroups,
} from "@env/mock/data";
import type {
  Config,
  EnvironmentVariable,
  EnvironmentVariableGroup,
  ParsedEnvVariable,
} from "@env/types/appTypes";
import type { AppContextProps, AppState } from "@env/types/contextTypes";
import React, { createContext, useState, ReactNode, useContext } from "react";

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  const initialConfig: Config = {
    filters: [],
    enableComments: false,
    loading: false,
    darkMode: false,
    commentSchema: customSchemaItems,
  };

  const initialEnvVariables = environmentVariables;
  const initialEnvVariablesGroups = environmentVariablesGroups;

  const [config, setConfig] = useState<Config>(initialConfig);
  const [envVariables, setEnvVariables] =
    useState<EnvironmentVariable[]>(initialEnvVariables);
  const [envVariablesGroups, setEnvVariablesGroups] = useState<
    EnvironmentVariableGroup[]
  >(initialEnvVariablesGroups);

  const updateConfig = (newConfig: Partial<Config>) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...newConfig,
    }));
  };
  const updateEnvVariables = (parsedEnvVariable: ParsedEnvVariable) => {
    const { groups, variables } = parsedEnvVariable;
    setEnvVariables(variables);
    setEnvVariablesGroups(groups);
  };

  const state: AppState = {
    config,
    envVariablesGroups,
    envVariables,
  };

  const contextValue: AppContextProps = {
    state,
    updateConfig,
    updateEnvVariables,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

function useAppContext(): AppContextProps {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export { AppProvider, useAppContext };
export { AppContext };
