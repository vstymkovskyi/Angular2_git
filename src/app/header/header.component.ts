import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.currentUserUpdated.subscribe((user) => {
      this.isLoggedIn = true;
      this.user_displayName = user.displayName;
      this.user_email = user.email;
    });

    this.authService.isLoggedInChange.subscribe((value) => this.isLoggedIn = value);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
    return false;
  }
}
