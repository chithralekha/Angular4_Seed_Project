import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Task } from './task.model';
import {TasksSummaryService } from './tasks.service';
import { SortablejsOptions } from 'angular-sortablejs';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent implements OnInit, OnDestroy {
  tasks: Promise<Task[]>;
  subscription: Subscription;
  options : SortablejsOptions = {
    group : 'test'
  };

  constructor(private taskService: TasksSummaryService,
              private router: Router,
              private route: ActivatedRoute) {
                this.options = {
    onUpdate: (event: any) => {
      alert('hi');
    }
  };
  }

  ngOnInit() {
      this.getTaskSummary();
      
  }
  getTaskSummary() {
    this.tasks = this.taskService.getTaskSummary();
    //alert(this.tasks);
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}