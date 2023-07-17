import type {
  Config,
  EnvironmentVariable,
  EnvironmentVariableGroup,
  ParsedEnvVariable,
} from "./appTypes";

export interface AppContextProps {
  state: AppState;
  updateConfig: (newConfig: Partial<Config>) => void;
  updateEnvVariables: (newEnvVariables: ParsedEnvVariable) => void;
}

export interface AppState {
  config: Config;
  envVariablesGroups: EnvironmentVariableGroup[];
  envVariables: EnvironmentVariable[];
}
