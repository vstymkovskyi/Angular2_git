import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthService],
})

export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }

  login(type) {
    this.authService.login(type).then((data) => {
      this.router.navigate(['user']);
    });
  }
}