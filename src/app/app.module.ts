import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent,
    GoogleChartComponent,
    BarChartComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
