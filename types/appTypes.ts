export interface Config {
  filters: string[];
  loading: boolean;
  enableComments: boolean;
  darkMode: boolean;
  commentSchema: CommentSchema[];
}

export interface CommentSchema {
  id: string;
  searchPattern: string;
  comment: string;
  programmingLanguage: string;
}

export interface EnvironmentVariableGroup {
  name: string;
}

export interface EnvironmentVariable {
  key: string;
  value: string;
  comments?: string[];
  group?: string;
}

export type ParsedEnvVariable = {
  groups: EnvironmentVariableGroup[];
  variables: EnvironmentVariable[];
};
