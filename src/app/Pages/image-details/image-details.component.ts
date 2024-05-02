import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// ------- services
import { ImagesService } from '../../Services/images.service';
import { ConfirmationService } from 'primeng/api';

// ------- primeNg components
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

// ------- components
import { EditImageComponent } from '../../Components/edit-image/edit-image.component';

@Component({
  selector: 'app-image-details',
  standalone: true,
  providers: [ConfirmationService],
  imports: [ButtonModule, EditImageComponent, ConfirmDialogModule],
  templateUrl: './image-details.component.html',
  styleUrl: './image-details.component.css',
})
export class ImageDetailsComponent {
  ID: string = '';
  image: any = {
    id: '',
    name: '',
    description: '',
    collection: '',
    image: '',
  };

  displayEditPopup: boolean = false;

  constructor(
    private router: Router,
    activated: ActivatedRoute,
    private imagesService: ImagesService,
    private confirmationService: ConfirmationService
  ) {
    this.ID = activated.snapshot.params['id'];
  }

  ngOnInit() {
    this.imagesService.getImageByID(this.ID).subscribe((data) => {
      this.image = data;
    });
  }

  openEditPopup() {
    this.displayEditPopup = true;
  }

  editImageData(e: any) {
    this.imagesService.updateImage(this.ID, e).subscribe((data) => {
      this.image = data;
    });
  }

  deleteImage() {
    this.imagesService.deleteImage(this.ID).subscribe();
  }

  confirmDelete() {
    let deleteBtn = document.getElementById('deleteBtn');

    this.confirmationService.confirm({
      target: deleteBtn!,
      message: 'Are you sure that you want to delete this image?',
      accept: () => {
        this.deleteImage();
        this.router.navigateByUrl('');
      },
    });
  }
}
