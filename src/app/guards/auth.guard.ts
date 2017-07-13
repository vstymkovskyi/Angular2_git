import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService,
        private auth: AngularFireAuth
    ) {

    }

    canActivate() {
        // return this.authService.currentUserUpdated.subscribe((user) => {
        //     console.log(this.authService.isLoggedIn);
        //     return true;
        // });

        return this.auth.authState
            .take(1)
            .map(authState => !!authState)
            .do(auth => !auth ? this.router.navigate(['']) : true);

    }
}