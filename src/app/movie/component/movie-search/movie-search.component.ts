import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [MatIconModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {}
