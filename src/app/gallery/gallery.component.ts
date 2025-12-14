// Desenvolupat per JAN QUERALT - 14/12/2025
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  isArtistsHovered = false;
  isPaintsHovered = false;
}
