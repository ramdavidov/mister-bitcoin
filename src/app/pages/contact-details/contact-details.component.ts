import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  contact: Contact = null;
  contactSub: Subscription = undefined;
  currUser: User = null

  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private userService: UserService,
    private router: Router) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (this.contactSub) {
        this.contactSub.unsubscribe()
      }
      this.contactSub = this.contactService.getContactById(params.id).subscribe(res => this.contact = res);
    });
    this.getUser()
  }
  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }

  onGoBackClick() {
    this.router.navigate(['/contact']);
  }

  getUser() {
    this.currUser = this.userService.getUser()
    console.log(this.currUser)
  }

  transferCoins(ev: number) {
    // console.log('I will transfer this much coins:', ev);
    this.userService.addMove(this.contact, ev)
  }

  get contactImgUrl() {
    return 'https://robohash.org/' + this.contact._id
  }

  get filterMoves() {
    const moves = this.currUser.moves
    return moves.filter(move => move.toId === this.contact._id)
  }

  get contactId() {
    return this.contact._id
  }
}