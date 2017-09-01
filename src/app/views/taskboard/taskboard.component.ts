import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Task } from './task.model';
import {TasksSummaryService } from './tasks.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit, OnDestroy {
  tasks: Promise<Task[]>;
  subscription: Subscription;
  sortableOptions : {
    };

  constructor(private taskService: TasksSummaryService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sortableOptions = {
        connectWith: ".connectList"
    };
      this.getTaskSummary();
      
  }
  getTaskSummary(){
this.tasks = this.taskService.getTaskSummary();
 alert(this.tasks);
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}