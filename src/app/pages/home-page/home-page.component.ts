import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  currUser: User = null
  btcRate: Promise<number> = null
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.currUser = this.userService.getUser()
    this.getRate()
  }

  async getRate(){
    const prm = await this.bitcoinService.getRate()
    this.btcRate = prm
  }

  get last3Moves() {
    return this.currUser.moves.slice(0, 3)
  }
}
