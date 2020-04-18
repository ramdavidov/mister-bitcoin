import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
// import { User } from '../../models/user.model';

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  username: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.signup(this.username)
  }

}
