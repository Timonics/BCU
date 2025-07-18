export interface LeadershipAnalytics {
  title: string;
  counts: number;
  date_created: string;
}

export interface LeadershipPosition {
  id: number;
  type: string;
  appointedAt: string;
}
