import { EpisodeDetailResponse } from "./episode-detail-response";

export interface EpisodeListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };

  
  results: EpisodeDetailResponse[];
}
