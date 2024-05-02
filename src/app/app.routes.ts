import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ImageDetailsComponent } from './Pages/image-details/image-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'image/:id',
    component: ImageDetailsComponent,
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./Modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];
