import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import Chart from 'chart.js';
import Speech from 'speak-tts';

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
    HttpModule,
    ChartsModule
  ],
  providers: [
    GetDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
