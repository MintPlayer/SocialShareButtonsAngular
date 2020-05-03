import { Component } from '@angular/core';
import { FacebookSdkHelper } from './helpers/facebook-sdk.helper';
import { TwitterSdkHelper } from './helpers/twitter-sdk.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private facebookSdkHelper: FacebookSdkHelper, private twitterSdkHelper: TwitterSdkHelper) {
    this.facebookSdkHelper.loadSdk();
    this.twitterSdkHelper.loadSdk();
  }
  title = 'SocialSharing';
}
