import { DatePipe, NgFor, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, DatePipe, NgFor, SlicePipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  movie = {
    title: 'The Shawshank Redemption',
    release_date: '1994-09-23',
    overview:
      'Framed for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', // Placeholder
    genres: [
      { id: 18, name: 'Drama' },
      { id: 80, name: 'Crime' },
    ],
  };
}
