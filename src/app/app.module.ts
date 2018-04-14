import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import Chart from 'chart.js';

import { AppComponent } from './app.component';
import { GetDataService } from './get-data.service';
import { StatsSectionComponent } from './stats-section/stats-section.component';
import { CompareStatsComponent } from './compare-stats/compare-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    StatsSectionComponent,
    CompareStatsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
