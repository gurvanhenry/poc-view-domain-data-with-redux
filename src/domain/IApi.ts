type SearchUserResult = {
  status: string; // "ok" | "error";
  result: string;
}

export interface IApi {
  callSearchUser(text: string): SearchUserResult;
}