import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'chart-market-price',
  templateUrl: './chart-market-price.component.html',
  styleUrls: ['./chart-market-price.component.scss']
})
export class ChartMarketPriceComponent implements OnInit {
  @Input() marketPrice
  title = 'Market Price (USD)';
  type='AreaChart';
  data = [];
  columnNames = ['Date', 'USD'];
  options = { };
  width = 550;
  height = 400;
  constructor() { }
  ngOnInit(): void {
    this.renderChart(this.marketPrice)
  }
  renderChart(values){
    const data = values.map(value => {
      return [this.formatDate(value.x * 1000), value.y]
    })
    this.data = data
  }
  formatDate(timeStamp){
    return moment(timeStamp).format("MMM Do YY")
  }
}