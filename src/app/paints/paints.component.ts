// Desenvolupat per Jules - 14/12/2025
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paints.component.html',
  styleUrl: './paints.component.css'
})
export class PaintsComponent {
  paints = [
    { title: 'La Nit Estelada', image: 'https://picsum.photos/id/1015/200/300' },
    { title: 'El Crit', image: 'https://picsum.photos/id/1016/200/300' },
    { title: 'Guernica', image: 'https://picsum.photos/id/1018/200/300' }
  ];

  hoveredIndex: number | null = null;

  onMouseEnter(index: number) {
    this.hoveredIndex = index;
  }

  onMouseLeave() {
    this.hoveredIndex = null;
  }
}
