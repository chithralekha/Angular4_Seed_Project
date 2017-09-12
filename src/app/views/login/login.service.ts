import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { UserProfileService } from '../../../app/core/user-profile.service';
import { contentHeaders } from '../../../app/core/headers';
import { Router, ActivatedRoute,Params } from '@angular/router';
@Injectable()
export class LoginService {
  constructor(
    private router: Router,  
    private userProfileService: UserProfileService,
    private http: Http) { }

  login() {
    var authObj = {
            username: 'Administrator', Password: 'S3cret!', grant_type : 'password'
        }
    //let body = JSON.stringify(authObj);
    let body = "username=" + 'Administrator' + "&password=" + 'S3cret!' + "&grant_type=password";
    var credentials = "grant_type=password" 
                + "username=Administrator"
                + "password=S3cret!" 
    return this.http.post('http://localhost:50443/oauth/token', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().access_token);
          console.log(response.json().access_token);
           this.router.navigate(['dashboards/dashboard1']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
    // return Observable.of(true)
       
    //     .do(this.toggleLogState.bind(this));
        // .do((val: boolean) => {
        //   this.isLoggedIn = true;
        //   console.log(this.isLoggedIn);
        // });
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
  }
}
