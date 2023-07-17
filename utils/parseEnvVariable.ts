import {
  EnvironmentVariable,
  EnvironmentVariableGroup,
  ParsedEnvVariable,
} from "@env/types/appTypes";

export const parseEnvVariables = (
  rawEnvVariables: string
): ParsedEnvVariable => {
  const lines = rawEnvVariables.split(/\r?\n/);

  const parsedVariables: EnvironmentVariable[] = [];
  const parsedGroups: EnvironmentVariableGroup[] = [];

  let currentGroup: EnvironmentVariableGroup | undefined;
  let currentComments: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Check if the line defines a new group
    const groupMatch = trimmedLine.match(/^#\s*\[(.*?)]$/);
    if (groupMatch) {
      const groupName = groupMatch[1].trim();

      if (groupName.length > 0) {
        currentGroup = {
          name: groupName,
        };
      }
      continue;
    }

    // Skip empty lines or lines starting with '#'
    if (trimmedLine === "" || trimmedLine.startsWith("#")) {
      currentComments.push(trimmedLine);
      continue;
    }

    // Parse the variable key and value
    const equalSignIndex = trimmedLine.indexOf("=");
    if (equalSignIndex !== -1) {
      const key = trimmedLine.slice(0, equalSignIndex);
      const value = trimmedLine.slice(equalSignIndex + 1);

      const variable: EnvironmentVariable = {
        key,
        value,
        comments: currentComments.length > 0 ? currentComments : undefined,
        group: currentGroup ? currentGroup.name : undefined,
      };

      parsedVariables.push(variable);
      currentComments = [];
    }
    
    if (currentGroup) {
      parsedGroups.push(currentGroup);
    }
  }

  return { variables: parsedVariables, groups: parsedGroups };
};
