import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UserService],
})
export class UserDetailsComponent implements OnInit {
  userName: string;
  userProfile: any = {};

  constructor(
      private userService: UserService,
      private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if(params['name'] != undefined) {
        this.userName = params['name'];
      }
    });

    if(this.userName != undefined) {
      this.userService.getUserInfo(this.userName).subscribe(user => {
        this.userProfile = user;
      });
    }
  }

}
