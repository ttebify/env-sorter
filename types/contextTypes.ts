import type { Config } from "./appTypes";

export interface AppContextProps {
  state: AppState;
  updateConfig: (newConfig: Partial<Config>) => void;
  updateEnvVariables: (newEnvVariables: string) => void;
}

export interface AppState {
  config: Config;
  envVariables: string;
}
