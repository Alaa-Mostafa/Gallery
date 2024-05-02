import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { EditImageComponent } from '../../edit-image/edit-image.component';

import { ImagesService } from '../../../Services/images.service';
import { ConfirmationService } from 'primeng/api';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-header',
  standalone: true,
  providers: [ConfirmationService],
  imports: [RouterModule, EditImageComponent, ButtonModule, ConfirmDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  displayAddPopup: boolean = false;

  constructor(private imagesService: ImagesService, private router:Router, private confirmationService: ConfirmationService) {}

  openAddPopup() {
    this.displayAddPopup = true;
  }

  addNewImage(e: any) {
    this.imagesService.addNewImage(e).subscribe();
    this.confirmAdding();
  }

  confirmAdding() {
    this.confirmationService.confirm({
      message: 'Image added successfully!',
      accept: () => {
        this.displayAddPopup = false;

        if(this.router.url === "/") {
          window.location.reload();
        }
      },
    });
  }
}
