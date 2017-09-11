import { Component } from '@angular/core';
import {Router} from '@angular/router';

// Import Chart.js library
import 'chart.js';

import { Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { FlotChartDirective } from '../../components/charts/flotChart';
import { Observable } from 'rxjs/Observable';

import 'jquery-slimscroll';

import { WorkingSet} from '../../components/common/models/workingSet.model';
import { NavigationService} from '../../components/common/navigation/navigation.service';
declare var jQuery:any;
@Component({
  selector: 'dashboard1',
  templateUrl: 'dashboard1.template.html'
})

export class Dashboard1Component implements OnInit {

    public businessControlProfile = ['Business Control Profiles'];
    public value = ['value'];
    workingSets : WorkingSet[];

    public barChartLabels:string[] = [];
    public barChartType:string = 'horizontalBar';
    public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [100]}
  ];
  data : any[]=[];
  constructor(private router: Router,
              private route: ActivatedRoute) {

              }
 ngOnInit() {
   this.route.data.subscribe((data: { workingSets: WorkingSet[] }) => {
      this.workingSets = data.workingSets;
      //alert(this.workingSets[0].id);
      this.workingSets.forEach(element => {
        this.barChartLabels.push(element.name);
        //remove the following line
        //this.barChartData[0].data.push(element.workingSetCompliance);
      });
      //this.barChartData.push(this.data);
    });
 } 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
