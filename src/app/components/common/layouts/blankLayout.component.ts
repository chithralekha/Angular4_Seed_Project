import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'blank',
  templateUrl: 'blankLayout.template.html'
})
export class BlankLayoutComponent {

  ngAfterViewInit() {
    jQuery('body').addClass('login-bg');
  }

  ngOnDestroy() {
    jQuery('body').removeClass('login-bg');
  }
}
