
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'jquery-slimscroll';

import {NavigationService } from './navigation.service';
import { WorkingSet} from '../models/workingSet.model';

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {
  workingSets : WorkingSet[];
  constructor(private router: Router,
  private navigationService: NavigationService,
              private route: ActivatedRoute) {}

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }
  
   ngOnInit() {
     alert('hi');

     this.getNavigationSummary();
   }
   getNavigationSummary() {
    // this.tasks = this.taskService.getTaskSummary();
    // this.tasks2 = this.taskService.getTaskSummary();
    alert('in Navigation');
    this.navigationService.getNavigationSummary()
    .subscribe(workingSets => this.workingSets = workingSets);
    alert(this.workingSets);
  }
  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
