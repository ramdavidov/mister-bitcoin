import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) { }
  contact: Contact = null;
  contactSub: Subscription = undefined;

  ngOnInit(): void {
    this.loadContact()
  }

  ngOnDestroy(): void {
    if (this.contactSub) this.contactSub.unsubscribe();
  }

  loadContact(): void {
    const contactId = this.route.snapshot.params.id
    if (contactId) {
      this.route.params.subscribe(params => {
        if (this.contactSub) {
          this.contactSub.unsubscribe()
        }
        this.contactSub = this.contactService.getContactById(params.id).subscribe(contact => this.contact = { ...contact });
      });
    } else {
      this.contact = new Contact
    }
  }

  onSubmit(): void {
    this.contactService.saveContact(this.contact)
    this.router.navigate([`/contact`]);
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate([`/contact`]);
  }

  goBack() {
    if (this.contact._id) this.router.navigate([`/contact/${this.contact._id}`]);
    else { this.router.navigate([`/contact`]); }
  }
}
