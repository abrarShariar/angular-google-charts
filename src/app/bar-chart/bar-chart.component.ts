import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartData = [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ];

  public bar_ChartOptions = {
    title: 'Company Performance',
    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    width: 900,
    height: 500
  };

  constructor() { }

  ngOnInit() {
  }

}
