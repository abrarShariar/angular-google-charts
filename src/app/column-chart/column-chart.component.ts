import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  public column_ChartData = [
    ['Date', 'PayCount'],
    ['01/05/17', 10],
    ['02/05/17', 15],
    ['03/05/17', 1],
    ['04/05/17', 0],
    ['05/05/17', 90],
    ['06/05/17', 100],
    ['07/05/17', 101],
  ];

  public column_ChartOptions = {
    width: 900,
    height: 500,
    chart: {
      title: 'Payments vs Date',
      subtitle: 'Payments done this month'
    },
  };


  constructor() {
  }

  ngOnInit() {
  }

}
