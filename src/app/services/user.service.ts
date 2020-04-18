import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { StorageService } from './storage.service'

const KEY = 'user'
var USER: User = null

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService, private router: Router) { }

  // public getUser(): User {
  //   USER = this.loadUser()
  //   if (!USER) this.router.navigate(['/signup']);
  //   else {
  //     return USER
  //   }
  // }
  public getUser(): User {
    USER = this._loadUser()
    return USER
  }

  public signup(name: string) {
    USER = new User(name)
    this._saveUser()
    this.router.navigate(['']);
  }

  public addMove(contact: Contact, amount: number) {
    const newMove = new Move(contact._id, contact.name, null, amount)
    newMove.setAt();
    USER.moves.unshift(newMove)
    this._updateCoins(amount)
    this.storageService.store(KEY, USER)
  }

  private _loadUser() {
    return this.storageService.load(KEY)
  }

  private _saveUser(): void {
    this.storageService.store(KEY, USER)
  }

  private _updateCoins(amount) {
    USER.coins -= amount
  }

}
