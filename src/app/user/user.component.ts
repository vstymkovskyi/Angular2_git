import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [AuthService],
})
export class UserComponent implements OnInit {
  userProfile: any = {};


  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.userProfile = this.authService.currentUser.providerData[0];
  }
}
