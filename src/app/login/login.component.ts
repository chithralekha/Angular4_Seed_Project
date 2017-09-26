import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from './login.service';
import { UserProfileService } from '../../app/core/user-profile.service';
import { ToastService} from '../../app/core/toast/toast.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})

export class LoginComponent implements OnDestroy {
  user : {userName : string;
  password : string;
  };
  private loginSub: Subscription;
  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private userProfileService: UserProfileService,
              private toastService: ToastService) {
              }
  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }              
  
  onsubmit() {
    //alert('hi');
     this.router.navigate(['dashboards/dashboard1']);
  }

  login() {
    this.loginSub = this.loginService
      .login("Administrator", "S3cret!");
      this.loginService.getUserProfile();
      this.toastService.activate(`Successfully logged in`);
      // .mergeMap(loginResult => this.route.queryParams)
      // .map(qp => qp['redirectTo'])
      // .subscribe(redirectTo => {
      //   //if (this.userProfileService.isLoggedIn) {
      //     let url = redirectTo ? [redirectTo] : [ 'dashboards/dashboard1' ];
      //     this.router.navigate(url);
      //   //}
      // });
  }

  ngOnDestroy() {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }
}
