interface IChallenges {
  badgeCnt?: number;
  category?: string;
  dayCnt?: number;
}

export interface IProfile {
  challenges?: IChallenges[];
  nickname?: string;
  ongoingChallengeCnt?: number;
  profileFilePath?: string;
  totalBadgeCnt?: number;
  userId?: number;
  email?: string;
}
