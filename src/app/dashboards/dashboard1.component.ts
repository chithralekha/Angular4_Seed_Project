import { Component } from '@angular/core';
import {Router} from '@angular/router';
import * as c3 from 'c3';

// Import Chart.js library
import 'chart.js';

import { Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { FlotChartDirective } from '../components/charts/flotChart';
import { Observable } from 'rxjs/Observable';

import 'jquery-slimscroll';

import { WorkingSet} from '../components/common/models/workingSet.model';
import { NavigationService} from '../components/common/navigation/navigation.service';
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
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  //return tooltipItem.yLabel;
                  return '';
           }
        }
    },
    responsive: true
  };
   public chartColors: Array<any> = [
    ];
  public barChartLegend:boolean = false;
  public barChartData:any[] = [
    {data: [],label:''}
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
        this.barChartData[counter].label = this.workingSets[counter].id;
      };
      //this.barChartData.push(this.data);
    });

     let chart = c3.generate({
        bindto: '#chart',


        data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
        }
    });
    let chartBcp = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data', 91.4]
          ],
          type: 'gauge',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        gauge: {
          label: {
            format: function(value, ratio) {
              return value;
            },
            show: false // to turn off the min/max labels.
          },
          min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
          max: 100, // 100 is default
          units: ' %',
          width: 39 // for adjusting arc thickness
        },
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
    var chartElement = e.active[0]._model;
    console.log(chartElement.label);
    console.log(chartElement.datasetLabel);  
    this.router.navigate(['taskboard/taskboard/1'], { queryParams: { bcp: +chartElement.datasetLabel } });
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
