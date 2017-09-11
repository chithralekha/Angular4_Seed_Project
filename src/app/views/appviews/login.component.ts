import { Component } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})

export class LoginComponent {

  constructor(
              private router: Router,
              private route: ActivatedRoute,) {
              }
  onsubmit() {
    //alert('hi');
     this.router.navigate(['dashboards/dashboard1']);
  }
 }
