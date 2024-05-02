import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImageTitlePipe } from '../../Pipes/image-title.pipe';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [ImageTitlePipe],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {
  constructor(private readonly router: Router) { }

  @Input() image: any;

  isHovered = false;

  handleClick() {
    this.router.navigate(['/image/' + this.image.id]);
  }
}
