import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";
import {TaskboardModule} from "./taskboard/taskboard.module";
import { TasksSummaryService } from './taskboard/tasks.service';
import {SortablejsModule} from 'angular-sortablejs';

import { NavigationService } from './components/common/navigation/navigation.service';
//import { ModalDirective } from './components/common/directives/modal.directive';
import { AdditionCalculateWindow } from './components/common/directives/modal.directive';
// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import { TaskboardComponent } from './taskboard/taskboard.component';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {PlunkerMaterialModule} from './components/common/models/materialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdModalDialog} from './components/common/directives/mdModal.component';
import { WorkingSetResolver } from './dashboards/workingSet-resolver.service';
import { LoginService } from './login/login.service';
import { UserProfileService } from './core/user-profile.service';
import { ToastService} from './core/toast/toast.service';
import { AuthGuard} from '../app/core/auth-guard.service';
import { ToastModule } from './core/toast/toast.module';
@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent,
    AdditionCalculateWindow,    
    MdModalDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardsModule,
    LayoutsModule,
    AppviewsModule,
    TaskboardModule,
    SortablejsModule,    
    ModalModule.forRoot(),
    BootstrapModalModule,
    PlunkerMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ToastModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},TasksSummaryService, NavigationService, WorkingSetResolver, LoginService, UserProfileService, AuthGuard,ToastService],
  bootstrap: [AppComponent],
  entryComponents: [ AdditionCalculateWindow, MdModalDialog ]
})
export class AppModule { }
