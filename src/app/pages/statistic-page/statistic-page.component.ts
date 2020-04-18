import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  marketPrice = null
  tradeVolume = null
  constructor(private bitcoinService: BitcoinService) { }
  ngOnInit(): void {
    this.getMarketPrice()
    this.getTradeVolume()
  }
  async getMarketPrice() {
    const prm = await this.bitcoinService.getMarketPrice()
    this.marketPrice = prm.values
  }
  async getTradeVolume() {
    const prm = await this.bitcoinService.getTradeVolume()
    this.tradeVolume = prm.values
  }
}
