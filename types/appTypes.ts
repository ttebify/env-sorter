export interface Config {
  filters: string[];
  enableComments: boolean;
  darkMode: boolean;
  commentSchema: CommentSchema[];
}

export interface CommentSchema {
  searchPattern: string;
  comment: string;
  programmingLanguage: string;
}
