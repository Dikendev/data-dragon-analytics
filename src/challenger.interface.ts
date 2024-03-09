export interface Challenger {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  hasLeaderboard: boolean;
  levelToIconPath: LevelToIconPath;
  thresholds: Thresholds;
}

export interface LevelToIconPath {
  IRON: string;
  BRONZE: string;
  SILVER: string;
  GOLD: string;
  PLATINUM: string;
  DIAMOND: string;
  MASTER: string;
  GRANDMASTER: string;
  CHALLENGER: string;
}

export interface Thresholds {
  IRON: Iron;
  BRONZE: Bronze;
  SILVER: Silver;
  GOLD: Gold;
  PLATINUM: Platinum;
  DIAMOND: Diamond;
  MASTER: Master;
  GRANDMASTER: Grandmaster;
  CHALLENGER: Challenger;
}

export interface Iron {
  value: number;
  rewards: Reward[];
}

export interface Reward {
  category: string;
  quantity: number;
  title: string;
}

export interface Bronze {
  value: number;
}

export interface Silver {
  value: number;
}

export interface Gold {
  value: number;
}

export interface Platinum {
  value: number;
}

export interface Diamond {
  value: number;
}

export interface Master {
  value: number;
}

export interface Grandmaster {
  value: number;
}

export interface Challenger {
  value: number;
}
