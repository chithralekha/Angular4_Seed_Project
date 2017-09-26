import { NgModule } from '@angular/core';
import { LoginRoutingModule, routedComponents } from './login-routing.module';
import { FormsModule } from '@angular/forms';
// import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [LoginRoutingModule, FormsModule],
  declarations: [routedComponents]
})
export class LoginModule { }
