import { Component, OnInit, Input, AfterViewInit, IterableDiffers, IterableDiffer, AfterViewChecked, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.scss'],
  host: {
    '[class.d-inline-block]': 'true'
  }
})
export class FacebookShareComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private router: Router, private locationStrategy: LocationStrategy, differs: IterableDiffers, @Inject('BASE_URL') private baseUrl: string) {
    this.differ = differs.find(this.commands).create(null);
  }

  differ: IterableDiffer<any>;

  ngOnInit() {
  }

  ngAfterViewInit() {
    //console.log('ngAfterViewInit');
    //this.updateHref();
  }

  ngAfterViewChecked() {
    //console.log('ngAfterViewChecked');
    const change = this.differ.diff(this.commands);
    if (change !== null) {
      // console.log(change);
      this.updateHref();
      //this.parseFacebookWidgets();
    }
  }

  //#region url
  href: string;
  private commands: any[] = [];
  @Input() set routerLink(value: string | any[]) {
    if (value === null) {
      this.commands = [];
    } else if (Array.isArray(value)) {
      this.commands = value;
    } else {
      this.commands = [value];
    }
    this.updateHref();
    this.parseFacebookWidgets();
  }
  //#endregion

  private updateHref() {
    let urlTree = this.router.createUrlTree(this.commands);
    let urlSerialized = this.router.serializeUrl(urlTree);
    this.href = this.baseUrl + this.locationStrategy.prepareExternalUrl(urlSerialized);
    console.log(`Facebook share href: ${this.href}`);
  }

  private parseFacebookWidgets() {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window['FB'] && window['FB'].XFBML.parse();
      }, 20);
    }
  }

  @Input() size: 'large' | 'small' = 'large';
  @Input() layout: 'box_count' | 'button_count' | 'button' = 'button_count';

}
