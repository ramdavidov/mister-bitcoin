import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  filterBy = { term: '' }
  contacts: Contact[] = [];
  currContact: Contact = null;
  subscription: Subscription


  constructor(private contactService: ContactService, private router: Router) {
    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];
    });
  }

  ngOnInit(): void {
    this.contactService.loadContacts()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  filterContacts(filterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }

  addClickHandler() {
    this.router.navigate(['/contact/edit/']);
  }

}
