import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() moves: Array<Move>
  @Input() isFullList: boolean

  constructor() { }

  ngOnInit(): void {
    console.log('moves', this.moves)
    console.log('is', this.isFullList)
  }
}
