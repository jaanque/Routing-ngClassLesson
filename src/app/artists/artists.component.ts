// Desenvolupat per JAN QUERALT - 14/12/2025
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {
  artists = [
    { name: 'Leonardo da Vinci', image: 'https://picsum.photos/id/1011/200/300' },
    { name: 'Vincent van Gogh', image: 'https://picsum.photos/id/1012/200/300' },
    { name: 'Pablo Picasso', image: 'https://picsum.photos/id/1013/200/300' }
  ];

  hoveredIndex: number | null = null;

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}
