import {
  EnvironmentVariable,
  EnvironmentVariableGroup,
} from "@env/types/appTypes";

type ConfigOptions = {
  groups: EnvironmentVariableGroup[];
};

export const formatEnvVariables = (
  envVars: EnvironmentVariable[],
  options: ConfigOptions
): string => {
  const { groups } = options;

  let formattedContent = "";

  for (const group of groups) {
    // Filter variables for the current group
    const groupVariables = envVars.filter(
      (variable) => variable.group === group.name
    );
    for (const variable of groupVariables) {
      if (variable.comments && variable.comments.length > 0) {
        formattedContent += variable.comments
          .map((comment) => `# ${comment}\n`)
          .join("");
      }

      // Add variable key and value
      formattedContent += `${variable.key}=${variable.value}\n`;
    }

    // Add empty line after each group
    formattedContent += "\n";
  }

  // Add variables without groups
  const variablesWithoutGroup = envVars.filter((variable) => !variable.group);
  for (const variable of variablesWithoutGroup) {
    if (variable.comments && variable.comments.length > 0) {
      formattedContent += variable.comments
        .map((comment) => `# ${comment}\n`)
        .join("");
    }

    formattedContent += `${variable.key}=${variable.value}\n`;
  }

  return formattedContent;
};
