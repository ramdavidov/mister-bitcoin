import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'chart-trade-volume',
  templateUrl: './chart-trade-volume.component.html',
  styleUrls: ['./chart-trade-volume.component.scss']
})
export class ChartTradeVolumeComponent implements OnInit {
  @Input() tradeVolume
  title = 'Trade Volume';
  type='AreaChart';
  data = [];
  columnNames = ['Date', 'Volume'];
  options = { };
  width = 550;
  height = 400;
  constructor() { }
  ngOnInit(): void {
    this.renderChart(this.tradeVolume)
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
