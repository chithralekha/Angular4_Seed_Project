import { NgModule } from '@angular/core';

import { LoginRoutingModule, routedComponents } from './login-routing.module';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LoginRoutingModule],
  declarations: [routedComponents]
})
export class LoginModule { }
