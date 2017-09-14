import {Routes} from "@angular/router";

import {Dashboard1Component} from "./dashboards/dashboard1.component";
import {Dashboard2Component} from "./dashboards/dashboard2.component";
import {Dashboard3Component} from "./dashboards/dashboard3.component";
import {Dashboard4Component} from "./dashboards/dashboard4.component";
import {Dashboard41Component} from "./dashboards/dashboard41.component";
import {Dashboard5Component} from "./dashboards/dashboard5.component";
import {TaskboardComponent} from "./taskboard/taskboard.component";
import {StarterViewComponent} from "./views/appviews/starterview.component";
import {LoginComponent} from "./login/login.component";
import {BlankLayoutComponent} from "./components/common/layouts/blankLayout.component";
import {BasicLayoutComponent} from "./components/common/layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./components/common/layouts/topNavigationlayout.component";

import { WorkingSetResolver } from './dashboards/workingSet-resolver.service';
import { AuthGuard} from '../app/core/auth-guard.service';

export const ROUTES:Routes = [
  // Main redirect
  { path: '', redirectTo: 'dashboards/dashboard1', pathMatch: 'full'},

  // App views
  {
    path: 'taskboard', component: BasicLayoutComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    canActivate: [AuthGuard],
    children: [
      { path: 'taskboard/:filterId', 
        component: TaskboardComponent} ]
      },
      {
        path: 'dashboards', component: BasicLayoutComponent,
        children: [
          {
            path: 'dashboard1', 
            component: Dashboard1Component, 
            resolve: { workingSets: WorkingSetResolver },
            canActivate: [AuthGuard]
          },
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {path: 'dashboard4', component: Dashboard4Component},
      {path: 'dashboard5', component: Dashboard5Component} ]
  },
  {
    path: 'dashboards', 
    component: TopNavigationLayoutComponent,
    children: [
      {
        path: 'dashboard41', 
        component: Dashboard41Component
      } ]
  },  
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: 'login'}
];
