import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageTitle',
  standalone: true
})
export class ImageTitlePipe implements PipeTransform {

  transform(value: string, maxLength: number = 16, ellipsis: string = "..."): unknown {
    // make every word start with a capital letter
    // also check the length doesn't exeed 16

    let words = value.split(" ");
    let wordsArr:any = [];
    let title = "";

    
    words.map((word) => {
      wordsArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    })

    title = wordsArr.join(" ");

    if(title.length > maxLength)
      title = title.slice(0, maxLength) + ellipsis;

    return title;
  }

}
