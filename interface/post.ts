import { IUser } from "./user";

export interface IPost {
  id: number;
  title: string;
  thumb: string;
  video: string;
  like: number;
  user: IUser;
  category: {
    id: number;
    text: string;
  };
}

export interface QueryResult {
  result: IPost[];
  nextPage: number;
  isLast: boolean;
}
