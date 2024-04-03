import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [MatGridListModule, MovieCardComponent, NgFor],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.scss',
})
export class MovieGridComponent {
  movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
