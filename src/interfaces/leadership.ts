import { MemberDetails } from './member';

export interface LeadershipAnalytics {
  title: string;
  counts: number;
  date_created: string;
}

export interface LeadershipPosition {
  id: number;
  type: string;
  members: Partial<MemberDetails[]>;
  membersCount: number;
  appointedAt: string;
}

export interface AddLeaderShipData extends Pick<LeadershipPosition, 'type'> {}

export interface LeadershipState {
  leaderPositions: Partial<LeadershipPosition[]>;
  setLeaderPositions: (value: Partial<LeadershipPosition[]>) => void;
}

export interface LeadershipResponse {
  statusCode: number;
  message: string;
  data: Partial<LeadershipPosition[]>;
  timestamp: string;
}
