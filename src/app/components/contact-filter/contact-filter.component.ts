import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy: any;
  @Output() onFilter = new EventEmitter<any>();

  filterByCopy = null;

  constructor() { }

  ngOnInit(): void {
    this.filterByCopy = { ...this.filterBy }
  }
  onInput() {
    this.onFilter.emit(this.filterByCopy)
  }
}



