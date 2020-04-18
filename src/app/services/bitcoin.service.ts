import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(coins: number = 1) {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
  }

  async getMarketPrice() {
    const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return res.data
  }

  async getTradeVolume() {
    const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
    return res.data
  }
}