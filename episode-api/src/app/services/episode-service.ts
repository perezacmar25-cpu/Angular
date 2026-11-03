import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interfaces/episode-list-response';
import { EpisodeDetailResponse } from '../interfaces/episode-detail-response';

@Service()
export class EpisodeService {

    http = inject(HttpClient);

    private baseUrl = 'https://rickandmortyapi.com/api/episode';

    getAll() : Observable<EpisodeListResponse>{
        return this.http.get<EpisodeListResponse>(this.baseUrl)
    }

    getOne(id : string) : Observable<EpisodeDetailResponse>{
        return this.http.get<EpisodeDetailResponse>(`${this.baseUrl}/${id}`)
    }

}