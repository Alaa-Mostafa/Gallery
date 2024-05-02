import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, TooltipModule],
})
export class AboutUsModule {}
