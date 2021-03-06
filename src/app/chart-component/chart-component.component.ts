import {Component, OnInit} from '@angular/core';
import {GoogleChartComponent} from '../google-chart/google-chart.component';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {

  public pie_ChartData = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]];

  public pie_ChartOptions = {
    title: 'My Daily Activities',
    width: 900,
    height: 500
  };


  constructor() {
  }

  ngOnInit() {

  }
}
