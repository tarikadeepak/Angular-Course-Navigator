import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/UserService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private route: Router,
              private userservice: UserService) { }

  login = (username, password) => {
    const user = {
      username,
      password
    };
    this.userservice.login(user)
    .then(u => this.route.navigate(['profile']));
  }

  ngOnInit() {
  }

}
