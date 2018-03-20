import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

//import { ChartService } from '../chart.service';
import * as _ from 'lodash';
import { GetDataService } from './../get-data.service';

@Component({
  selector: 'app-stats-section',
  templateUrl: './stats-section.component.html',
  styleUrls: ['./stats-section.component.css']
})
export class StatsSectionComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor(private dataService: GetDataService) { }
  
  data: any = {};
  allData: any = {};
  xAxisData = new Array<string>();
  yAxisData = new Array<string>();

  ngOnInit() {

    this.dataService.fetchStatsData().subscribe(data => {
      this.data = data;
    })

    this.dataService.fetchAllData().subscribe(data => {
      this.allData = data;
      for(var i = 0; i < this.allData.length; i++)
        this.yAxisData[i] = this.allData[i].batting_score.toString();

      for(var i = 0; i < this.allData.length; i++)
        this.xAxisData[i] = this.allData[i].date;

      this.allMatchScoreChart(this.xAxisData, this.yAxisData);
    })
  }

  allMatchScoreChart(xAxisData, yAxisData) {
    const element = this.el.nativeElement;
    const data = [{
      x: xAxisData,
      y: yAxisData,
      type: 'bar',
      marker: { color: '#4b32f0'}
    }];

    const style = {
      margin: {t: 30},
      width: 1000,
      height: 600
    }

    Plotly.plot(element, data, style);
  }





  // allDataItem = function (allData) {
  //   for (var i = 0; i < allData.length; i++)
  //     this.yAxisData[i] = allData[i].batting_score.toString();

  //   for (var i = 0; i < allData.length; i++)
  //     this.xAxisData[i] = allData[i].date;

  //   this.barChartLabels = this.xAxisData;
  //   this.barChartType = 'bar';
  //   this.barChartLegend = true;
  //   this.barChartData = this.yAxisData;
  // }  

  // for(i = 0; i < this.allData.length; i++)
  //   this.yAxisData[i] = this.allData[i].batting_score.toString();

  // for(i = 0; i < this.allData.length; i++)
  //   this.xAxisData[i] = this.allData[i].date;

  // public barChartLabels: string[] = this.xAxisData;
  // public barChartType: string = 'bar';
  // public barChartLegend: boolean = true;
  // public barChartData: any[] = this.yAxisData;

  // public chartClicked(e: any): void {
  //   console.log(e);
  // }

  // public chartHovered(e: any): void {
  //   console.log(e);
  // }


  // allDataItem = function(allData) {
  //   var main_array = new Array(463);
  //   for(var i = 0; i < 463; i++)
  //     main_array[i]=new Array(2);

  //   console.log(allData[0].batting_score + "  " + allData[0].date);
  //   console.log(allData.length);
  //   var m = new Date(`${allData[0].date}`);
  //   console.log(m);

  //   for (var i = 0; i < allData.length; i++) 
  //     main_array[i][0] = allData[i].batting_score;

  //   for (var i = 0; i < allData.length; i++) 
  //     main_array[i][1] = new Date(`${allData[i].date}`);

  //   return main_array;    
  // }

}