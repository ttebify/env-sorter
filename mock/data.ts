import type {
  CommentSchema,
  EnvironmentVariable,
  EnvironmentVariableGroup,
} from "@env/types/appTypes";

// Mock data for the scrollable list of custom schema items
export const customSchemaItems: CommentSchema[] = [
  {
    id: "1",
    searchPattern: "TWILO_*",
    comment: "Comment here",
    programmingLanguage: "node.js",
  },
  {
    id: "2",
    searchPattern: "ANOTHER_*",
    comment: "Another comment",
    programmingLanguage: "node.js",
  },
  {
    id: "3",
    searchPattern: "SOME_*",
    comment: "Some comment",
    programmingLanguage: "node.js",
  },
  // ...
];

// Mock data of groups
export const environmentVariablesGroups: EnvironmentVariableGroup[] = [
  {
    name: "Authentication",
    comment: ["Environment variables related to authentication"],
  },
  {
    name: "Database",
    comment: ["Environment variables related to the database"],
  },
  {
    name: "Configuration",
    comment: ["Environment variables for general configuration"],
  },
];

// Mock data of environment variables
export const environmentVariables: EnvironmentVariable[] = [
  {
    key: "API_KEY",
    value: "12345",
    comments: [
      "This is the API key for accessing the application's backend services",
      "Make sure to keep it confidential",
    ],
    group: "Authentication",
  },
  {
    key: "DB_HOST",
    value: "localhost",
    comments: [
      "The hostname for the database server",
      "Update this if the database server is hosted elsewhere",
    ],
    group: "Database",
  },
  {
    key: "DEBUG_MODE",
    value: "true",
    comments: [
      "Set this to 'true' to enable debug mode",
      "Debug mode provides additional logging and diagnostics",
    ],
    group: "Configuration",
  },
  {
    key: "SMTP_HOST",
    value: "smtp.example.com",
    comments: [
      "The hostname for the SMTP server",
      "Used for sending email notifications",
    ],
  },
  {
    key: "MAX_USERS",
    value: "100",
    comments: [
      "The maximum number of users allowed in the system",
      "Adjust this value according to the system's capacity",
    ],
  },
  // Add more environment variables as needed
];
