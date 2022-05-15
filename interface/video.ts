import { IUser } from "./user";

export interface IVideo {
  id: number;
  title: string;
  thumbnailPath: string;
  filePath: string;
  likeCnt: number;
  postedBy: IUser;
  hit: number;
  category: {
    id: number;
    text: string;
  };
  isLiked: boolean;
  postedAt: string;
}

export interface QueryResult {
  result: IVideo[];
  nextPage: {
    id: number;
    showId: number;
  };
  isLast: boolean;
}

export interface IVideoRes {
  code: number;
  data: IVideo;
  msg: string;
  success: boolean;
}
