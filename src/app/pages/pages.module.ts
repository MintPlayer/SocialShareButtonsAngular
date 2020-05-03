import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SocialSharingModule } from '../components/social-sharing/social-sharing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonShowComponent } from './person-show/person-show.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PersonShowComponent
  ],
  imports: [
    CommonModule,
    SocialSharingModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
