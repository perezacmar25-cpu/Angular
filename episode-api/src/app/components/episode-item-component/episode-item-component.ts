import { Component, input, output } from '@angular/core';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {

  episode = input<EpisodeDetailResponse>();
  episodeClicked = output<number>();


  emitEpisodeClicked() {
    const id = this.episode()?.id; 
    if (id !== undefined) {
      this.episodeClicked.emit(id);
    }
  }
}
