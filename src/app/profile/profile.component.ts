import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {}
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.currentUser()
      .then(user =>
        this.currentUser = user
      );
  }

}
