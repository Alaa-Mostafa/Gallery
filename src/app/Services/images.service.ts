import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private readonly URL = 'http://localhost:3000/Images';

  constructor(private readonly httpClient: HttpClient) {}

  getImages() {
    return this.httpClient.get(this.URL);
  }

  getImageByID(id:string) {
    return this.httpClient.get(this.URL+"/"+id);
  }

  addNewImage(newImage:any) {
    return this.httpClient.post(this.URL, newImage);
  }

  updateImage(id: string, updatedImage:any) {
    return this.httpClient.put(this.URL + "/" + id, updatedImage);
  }

  deleteImage(id: string) {
    return this.httpClient.delete(this.URL + "/" + id);
  }
}
