import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookShareComponent } from './facebook-share/facebook-share.component';
import { TwitterShareComponent } from './twitter-share/twitter-share.component';

@NgModule({
  declarations: [
    FacebookShareComponent,
    TwitterShareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FacebookShareComponent,
    TwitterShareComponent
  ]
})
export class SocialSharingModule { }
