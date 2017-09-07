
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
  bcp : number;
  filterId:number;
  sub: any;

  constructor(private router: Router,
  private navigationService: NavigationService,
              private route: ActivatedRoute) {
                 this.filterId = 1;
              }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }
  
   ngOnInit() {
     //alert('hi');
     this.route.queryParams.subscribe( qParams => {
       this.bcp = +qParams['bcp'];
      });
      
      this.route.params.subscribe( params => {
        this.filterId = +params['filterId'];
        //alert(this.filterId);
      });
     
     this.getNavigationSummary();
   }
   getNavigationSummary() {
    // this.tasks = this.taskService.getTaskSummary();
    // this.tasks2 = this.taskService.getTaskSummary();
    //alert('in Navigation');
    this.navigationService.getNavigationSummary()
    .subscribe(workingSets => this.workingSets = workingSets,
    error =>  alert(error));
    //alert(this.workingSets);
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }
 
 bcpNavClass(bcp:number) {
   //alert('hi From bcpNavClass');   
   if(bcp == this.bcp) return 'active';
   else return '';
 }

 //following function has not been used.
 filterNavClass(filterId:number) {
   if(filterId == this.filterId) return 'active';
   else return '';
 }

}
