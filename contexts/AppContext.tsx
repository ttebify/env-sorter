import type { Config } from "@env/types/appTypes";
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
    darkMode: false,
    commentSchema: [],
  };

  const initialEnvVariables = "";

  const [config, setConfig] = useState<Config>(initialConfig);
  const [envVariables, setEnvVariables] = useState<string>(initialEnvVariables);

  const updateConfig = (newConfig: Partial<Config>) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...newConfig,
    }));
  };

  const updateEnvVariables = (newEnvVariables: string) => {
    setEnvVariables(newEnvVariables);
  };

  const state: AppState = {
    config,
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
