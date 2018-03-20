import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import * as _ from 'lodash';
import { GetDataService } from './../get-data.service';

@Component({
  selector: 'app-compare-stats',
  templateUrl: './compare-stats.component.html',
  styleUrls: ['./compare-stats.component.css']
})
export class CompareStatsComponent implements OnInit {

  @ViewChild('piechart1') pie1: ElementRef;
  @ViewChild('piechart2') pie2: ElementRef;
  @ViewChild('piechart3') pie3: ElementRef;
  @ViewChild('piechart4') pie4: ElementRef;

  constructor(private dataService: GetDataService) { }

  data: any = {};

  ngOnInit() {

    this.dataService.fetchCompareData().subscribe(data => {
      this.data = data;

      this.totalAvgPie1(this.data[0].avg, this.data[1].avg, this.data[2].avg, this.data[3].avg, this.data[4].avg);
      this.totalRunPie2(this.data[0].totalRun, this.data[1].totalRun, this.data[2].totalRun, this.data[3].totalRun, this.data[4].totalRun);
      this.totalCenturyPie3(this.data[0].century, this.data[1].century, this.data[2].century, this.data[3].century, this.data[4].century);
      this.totalInningPie4(this.data[0].innings, this.data[1].innings, this.data[2].innings, this.data[3].innings, this.data[4].innings);
    });

  }

  totalAvgPie1(bl, rp, svr, sj, st) {
    var totalRun = bl+rp+svr+sj+st;
    bl = (bl / totalRun) * 100;
    rp = (rp / totalRun) * 100;
    svr = (svr / totalRun) * 100;
    sj = (sj / totalRun) * 100;
    st = (st / totalRun) * 100;

    const element = this.pie1.nativeElement;
    const data = [{
      values: [bl, rp, svr, sj, st],
      labels: ['Brian Lara', 'Ricky Ponting', 'Sir Viv Richards', 'Sanath Jayasuriya', 'Sachin Tendulkar'],
      type: 'pie'
    }];

    const style = {
      height: 400,
      width: 500
    };

    Plotly.plot(element, data, style);
  }

  totalRunPie2(bl, rp, svr, sj, st) {
    var totalRun = bl + rp + svr + sj + st;
    bl = (bl / totalRun) * 100;
    rp = (rp / totalRun) * 100;
    svr = (svr / totalRun) * 100;
    sj = (sj / totalRun) * 100;
    st = (st / totalRun) * 100;

    const element = this.pie2.nativeElement;
    const data = [{
      values: [bl, rp, svr, sj, st],
      labels: ['Brian Lara', 'Ricky Ponting', 'Sir Viv Richards', 'Sanath Jayasuriya', 'Sachin Tendulkar'],
      type: 'pie'
    }];

    const style = {
      height: 400,
      width: 500
    };

    Plotly.plot(element, data, style);
  }

  totalCenturyPie3(bl, rp, svr, sj, st) {
    var totalRun = bl + rp + svr + sj + st;
    bl = (bl / totalRun) * 100;
    rp = (rp / totalRun) * 100;
    svr = (svr / totalRun) * 100;
    sj = (sj / totalRun) * 100;
    st = (st / totalRun) * 100;

    const element = this.pie3.nativeElement;
    const data = [{
      values: [bl, rp, svr, sj, st],
      labels: ['Brian Lara', 'Ricky Ponting', 'Sir Viv Richards', 'Sanath Jayasuriya', 'Sachin Tendulkar'],
      type: 'pie'
    }];

    const style = {
      height: 400,
      width: 500
    };

    Plotly.plot(element, data, style);
  }

  totalInningPie4(bl, rp, svr, sj, st) {
    var totalRun = bl + rp + svr + sj + st;
    bl = (bl / totalRun) * 100;
    rp = (rp / totalRun) * 100;
    svr = (svr / totalRun) * 100;
    sj = (sj / totalRun) * 100;
    st = (st / totalRun) * 100;

    const element = this.pie4.nativeElement;
    const data = [{
      values: [bl, rp, svr, sj, st],
      labels: ['Brian Lara', 'Ricky Ponting', 'Sir Viv Richards', 'Sanath Jayasuriya', 'Sachin Tendulkar'],
      type: 'pie'
    }];

    const style = {
      height: 400,
      width: 500
    };

    Plotly.plot(element, data, style);
  }

}
