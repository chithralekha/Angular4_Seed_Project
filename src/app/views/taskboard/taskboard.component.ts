import { Component, OnInit, OnDestroy, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Task } from './task.model';
import {TasksSummaryService } from './tasks.service';
import { SortablejsOptions } from 'angular-sortablejs';
import { AdditionCalculateWindow, AdditionCalculateWindowData } from '../../components/common/directives/modal.directive';
@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})

export class TaskboardComponent implements OnInit, OnDestroy {
  // tasks: Promise<Task[]>;
  // tasks2 : Promise<Task[]>;

  tasks: Task[];
  todoList : Task[];
  inProgressList : Task[];
  completedList : Task[];
  bcp : number;
  filterId : number;
  sub : any;

  tasks3 = [{
            content: 'Simply dummy text of the printing and typesetting industry.',
            date: '12.10.2015',
            statusClass: 'warning',
            tagName: 'Mark'
        },
        {
            content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Tag'
        },
        {
            content: 'Sometimes by accident, sometimes on purpose (injected humour and the like).',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Mark'
        }];
  tasks4 = [{
            content: 'Simply dummy text of the printing and typesetting industry.',
            date: '12.10.2015',
            statusClass: 'warning',
            tagName: 'Mark'
        },
        {
            content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Tag'
        },
        {
            content: 'Sometimes by accident, sometimes on purpose (injected humour and the like).',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Mark'
        }];
  tasks5 = [{
            content: 'Simply dummy text of the printing and typesetting industry.',
            date: '12.10.2015',
            statusClass: 'warning',
            tagName: 'Mark'
        },
        {
            content: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.',
            date: '05.04.2015',
            statusClass: 'success',
            tagName: 'Tag'
        },
        {
            content: 'Sometimes by accident, sometimes on purpose (injected humour and the like).',
            date: '16.11.2015',
            statusClass: 'info',
            tagName: 'Mark'
        }];
  subscription: Subscription;
  options : SortablejsOptions = {
    group : 'test'
  };

  constructor(private taskService: TasksSummaryService,
              private router: Router,
              private route: ActivatedRoute,
              vcRef: ViewContainerRef, public modal: Modal) {
                this.options = {
                  group : 'test',
                  onUpdate: (event: any) => {
                    alert('hi');
                    this.postChangesToServer();
                  }
                };
                this.sub = this.route.params.subscribe(params => {
                  this.filterId = + params['filterId'];
                });
              }

  postChangesToServer() {
    alert('hi');
  }

  ngOnInit() {
    
    //alert(this.filterId);
    this.route.params.forEach(params => {
      
      let filterId = +params['filterId'];
      this.route.queryParams.subscribe( qParams => {
        this.bcp = +qParams['bcp'];
      });
      
      //alert(filterId);
      //alert(this.bcp);
      this.getTaskSummary(filterId,this.bcp);
    });

    this.route.queryParams.forEach(params => {
      let bcp = params["bcp"];
      //alert(bcp);
      this.getTaskSummary(1,bcp);
    })
    // this.route.params.subscribe( params => {
    //   this.filterId =params['filterId']
    //   alert(this.filterId);
    //   let bcp = this.route.queryParams["bcp"];
    //   alert(bcp);
    //   this.getTaskSummary(this.filterId,bcp);
    // });

    //   this.route.queryParams.subscribe( params => this.bcp = params['bcp']);
    //   alert(this.bcp);
      
  }
  getTaskSummary(filterId:number, bcp:number) {
    // this.tasks = this.taskService.getTaskSummary();
    // this.tasks2 = this.taskService.getTaskSummary();
    this.taskService.getTaskSummary(filterId, bcp)
    .subscribe(tasks => this.tasks = tasks);
    //alert('tasks...' + this.tasks);
  }
  taskDueStatusClass(task:Task) {
     var dueStatusClass = 'danger-element';
        switch(task.dueStatus.status)
        {
            case 'Overdue' :
                dueStatusClass = 'danger-element';
                break;
            case 'On Time' :
                dueStatusClass  = 'success-element';
                break;
            case 'In Jeopardy' :
                dueStatusClass = 'warning-element';
                break;
        }
        return dueStatusClass;
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  
  openCustom() {
    this.modal.open(AdditionCalculateWindow, new AdditionCalculateWindowData(2, 3));
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}