import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import { UserProfileService } from '../../app/core/user-profile.service';
import { contentHeaders } from '../../app/core/headers';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Injectable()
export class LoginService {
    
    constructor(
        private router: Router,
        private userProfileService: UserProfileService,
        private http: Http) { }
        
        login() {
            
            let body = "username=" + 'Administrator' + "&password=" + 'S3cret!' + "&grant_type=password";
            return this.http.post('http://localhost:50443/oauth/token', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    localStorage.setItem('id_token', response.json().access_token);
                    //alert( localStorage.getItem('id_token'));
                    console.log(response.json().access_token);
                    this.toggleLogState(true);
                    this.router.navigate(['dashboards/dashboard1']);
                },
                error => {
                    // alert(error.text());
                    console.log(error.text());
                });

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
    console.log(this.userProfileService.isLoggedIn);
  }

  getUserProfile() {
      //alert(localStorage.getItem('id_token'));
      
      return this.http.get('http://localhost:50443/user/profile', <RequestOptionsArgs>{headers: new Headers({'Authorization' : 'Bearer ' + localStorage.getItem('id_token')})})
      .subscribe(
          response => {    console.log(response.json());
        },
        error => {
         // alert(error.text());
          console.log(error.text());

        }
      );
  }
}
