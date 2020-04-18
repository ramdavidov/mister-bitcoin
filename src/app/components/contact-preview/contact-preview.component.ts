import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  constructor() { }

  ngOnInit(): void {
  }

  get contactImgUrl(){
    return 'https://robohash.org/' + this.contact._id
  }

  get contactId() {
    return this.contact._id
  }

}
