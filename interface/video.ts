import { IUser } from "./user";

export interface IVideo {
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
  isLiked: boolean;
}

export interface QueryResult {
  result: IVideo[];
  nextPage: number;
  isLast: boolean;
}
