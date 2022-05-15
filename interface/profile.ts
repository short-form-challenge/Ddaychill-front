interface IChallenges {
  badgeCnt?: number;
  category?: number;
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
