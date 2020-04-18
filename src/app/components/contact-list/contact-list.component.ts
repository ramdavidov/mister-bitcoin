import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit(): void {
    console.log('this.contacts (list)', this.contacts)
  }

}