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
   public chartColors: Array<any> = [
    ];
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: []}
  ];
  data : any[]=[];
  constructor(private router: Router,
              private route: ActivatedRoute) {

              }
 ngOnInit() {
   this.route.data.subscribe((data: { workingSets: WorkingSet[] }) => {
      this.workingSets = data.workingSets;
      //alert(this.workingSets[0].id);
      for(var counter =0; counter < this.workingSets.length; counter++) {
        this.barChartLabels.push(this.workingSets[counter].name);
        this.chartColors.push({backgroundColor : this.determineColor(this.workingSets[counter].workingSetCompliance)});
        this.barChartData[counter].data.push(50);
      };
      //this.barChartData.push(this.data);
    });
 } 
 determineColor(compliance:number) {
   var complianceColorCode = null;
        switch(true)
        {
            case (compliance >=0 && compliance <= 39) :
                complianceColorCode = 'red';
                break;
            case (compliance >= 40 && compliance <= 69) :
                complianceColorCode  = 'orange';
                break;
            case (compliance >= 70 && compliance <= 100) :
                complianceColorCode = 'green';
                break;
        }
        //alert(complianceColorCode);
        return complianceColorCode;
 }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
