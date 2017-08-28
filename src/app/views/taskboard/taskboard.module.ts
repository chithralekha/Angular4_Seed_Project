import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {TaskboardComponent} from "./taskboard.component";
@NgModule({
  declarations: [TaskboardComponent],
  imports     : [BrowserModule],
  exports     : [TaskboardComponent],
})

export class TaskboardModule {}
