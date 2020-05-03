import { Component, OnInit, Input, AfterViewInit, Inject, IterableDiffers, IterableDiffer, AfterViewChecked } from '@angular/core';
import { Router, UrlSegmentGroup } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-twitter-share',
  templateUrl: './twitter-share.component.html',
  styleUrls: ['./twitter-share.component.scss'],
  host: {
    '[class.d-inline-block]': 'true'
  }
})
export class TwitterShareComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private router: Router, private locationStrategy: LocationStrategy, differs: IterableDiffers, @Inject('BASE_URL') private baseUrl: string) {
    //this.differ = differs.find([]).create(null); // NOK
    //this.differ = differs.find([]).create(s => s);
    this.differ = differs.find(this.commands).create(null); // NOK
    //this.differ = differs.find(this.commands).create(s => s);
  }

  differ: IterableDiffer<any>;

  ngOnInit() {
  }

  ngAfterViewInit() {
    //this.updateTargetUrlAndHref();
    //this.updateHref();
  }

  ngAfterViewChecked() {
    const change = this.differ.diff(this.commands);
    if (change !== null) {
      // console.log(change);
      this.updateHref();
      //this.reloadTwitterWidgets();
    }
  }

  //#region url
  href: string;
  private commands: any[] = [];
  @Input() set routerLink(value: string | any[]) {
    console.log('RouterLink set');
    if (value === null) {
      this.commands = [];
    } else if (Array.isArray(value)) {
      this.commands = value;
    } else {
      this.commands = [value];
    }
    this.updateHref();
    this.reloadTwitterWidgets();
  }
  //#endregion


  private updateHref() {
    let urlTree = this.router.createUrlTree(this.commands);
    let urlSerialized = this.router.serializeUrl(urlTree);
    this.href = this.baseUrl + this.locationStrategy.prepareExternalUrl(urlSerialized);
    console.log(`Twitter share href: ${this.href}`);
  }

  private reloadTwitterWidgets() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        console.log('Reload Twitter widgets');
        window['twttr'] && window['twttr'].widgets.load();
      }, 2000);
    }
  }

  @Input() text: string = '';
  @Input() size: 'large' | 'small' = 'large';
}
