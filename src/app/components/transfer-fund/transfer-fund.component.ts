import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Input() maxCoins: number;
  @Output() onTransferCoins = new EventEmitter<number>();

  coinsToMove: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.coinsToMove > this.maxCoins || this.coinsToMove <= 0) return
    this.onTransferCoins.emit(this.coinsToMove)
  }

}
