import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  technologies = [
    {
      id: 0,
      name: "Angular 17",
      icon: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2024/2024-04/angular-logo.png?sfvrsn=543455a3_1"
    },
    {
      id: 1,
      name: "Tailwind CSS",
      icon: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
    },
    {
      id: 2,
      name: "PrimeNg",
      icon: "https://th.bing.com/th/id/R.9fee2a123945a3d9b1adfafa0a1e2c79?rik=AI34oTBpW%2bbZEw&pid=ImgRaw&r=0"
    },
    {
      id: 3,
      name: "Fake API via JSON Server",
      icon: "https://cdn.icon-icons.com/icons2/2790/PNG/512/json_filetype_icon_177531.png"
    },
  ]

  contacts = [
    {
      id: 1,
      platform: "LinkedIn",
      account: "https://www.linkedin.com/in/alaa-mostafa-abdelbary/",
      icon:'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png'
    },
    {
      id: 2,
      platform: "Github",
      account: "https://github.com/Alaa-Mostafa",
      icon:'https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'
    },
    {
      id: 3,
      platform: "Behance",
      account: "https://www.behance.net/alaamostafa42",
      icon:'https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Behance-512.png'
    }
  ]
}
