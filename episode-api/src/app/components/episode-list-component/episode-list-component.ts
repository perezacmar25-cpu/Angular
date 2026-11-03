import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeService } from '../../services/episode-service';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeModal } from '../../Modals/episode-modal/episode-modal';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent implements OnInit{
  

  episodeService= inject(EpisodeService)
  episodeList = signal<EpisodeDetailResponse[]>([])
  private modalService = inject(NgbModal)


  ngOnInit(): void {
    this.episodeService.getAll().subscribe(resp => {
      this.episodeList.set(resp.results)
    })
  }

  openEpisodeModal(id:number){
    this.episodeService.getOne(id.toString()).subscribe(resp => {
      const modalRef = this.modalService.open(EpisodeModal)
      modalRef.componentInstance.episode = resp;
    })

  }
}
