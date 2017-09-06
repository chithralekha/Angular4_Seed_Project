import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';

// App views
import {DashboardsModule} from "./views/dashboards/dashboards.module";
import {AppviewsModule} from "./views/appviews/appviews.module";
import {TaskboardModule} from "./views/taskboard/taskboard.module";
import { TasksSummaryService } from './views/taskboard/tasks.service';
import {SortablejsModule} from 'angular-sortablejs';

import { NavigationService } from './components/common/navigation/navigation.service';
// App modules/components
import {LayoutsModule} from "./components/common/layouts/layouts.module";
import { TaskboardComponent } from './views/taskboard/taskboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskboardComponent
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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},TasksSummaryService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
