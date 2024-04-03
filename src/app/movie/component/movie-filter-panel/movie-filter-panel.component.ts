import { Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-filter-panel',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './movie-filter-panel.component.html',
  styleUrl: './movie-filter-panel.component.scss',
})
export class MovieFilterPanelComponent {
  ratingValue!: number;
}
