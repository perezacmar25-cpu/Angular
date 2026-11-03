import { Routes } from '@angular/router';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';
import { EpisodeItemComponent } from './components/episode-item-component/episode-item-component';

export const routes: Routes = [

    {path: '',component:EpisodeListComponent},
    {path: '**',component:EpisodeListComponent},
    {path:'episodes/:id',component:EpisodeItemComponent}
];
