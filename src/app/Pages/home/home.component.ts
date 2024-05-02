import { Component, OnInit } from '@angular/core';

// ------- services
import { ImagesService } from '../../Services/images.service';

// ------- components
import { ImageCardComponent } from '../../Components/image-card/image-card.component';

// ------- primeNg components
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageCardComponent, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private imagesService: ImagesService) {}

  totalImagesData: any;     // total data from API
  images: any;              // the ones to be shown in page

  refreshData: boolean = false;     // for refreshing data after adding new image

  // --- pagination
  totalImages: number = 0;
  firstImageIndex: number = 0;
  imagesPerPage: number = 5;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.imagesService.getImages().subscribe((data) => {
      this.totalImagesData = data;
      this.totalImages = this.totalImagesData.length;

      this.images = this.totalImagesData.slice(this.firstImageIndex, (this.firstImageIndex + this.imagesPerPage));
    });
  }

  onPageChange(e:any) {
    this.images = this.totalImagesData.slice(e.first, (e.first + e.rows));
  }
}
