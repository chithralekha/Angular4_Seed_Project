import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserProfileService } from '../../../app/core/user-profile.service';

@Injectable()
export class LoginService {
  constructor(
    private userProfileService: UserProfileService) { }

  login() {
    return Observable.of(true)
       
        .do(this.toggleLogState.bind(this));
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
