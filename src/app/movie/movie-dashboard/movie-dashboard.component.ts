import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MovieCardComponent } from '../component/movie-card/movie-card.component';
import { MovieFilterPanelComponent } from '../component/movie-filter-panel/movie-filter-panel.component';
import { MovieSearchComponent } from '../component/movie-search/movie-search.component';
import { MovieGridComponent } from '../component/movie-grid/movie-grid.component';

@Component({
  selector: 'app-movie-dashboard',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MovieSearchComponent,
    MovieFilterPanelComponent,
    MovieCardComponent,
    MatListModule,
    MovieGridComponent,
  ],
  templateUrl: './movie-dashboard.component.html',
  styleUrl: './movie-dashboard.component.scss',
})
export class MovieDashboardComponent {}
