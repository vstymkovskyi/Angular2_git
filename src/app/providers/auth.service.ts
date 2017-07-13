import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
  public currentUser: firebase.User;
  public isLoggedIn: boolean = false;
  public isLoggedInChange: EventEmitter<boolean> = new EventEmitter();
  public currentUserUpdated: EventEmitter<any> = new EventEmitter();

  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.isLoggedInChange.subscribe((value) => this.isLoggedIn = value);

    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.currentUser = null;
        return;
      }
      this.currentUserUpdated.emit(user);
      this.isLoggedInChange.emit(true);
      this.currentUser = user;

    });
    this.user = afAuth.authState;
  }

  ngOnInit() {

  }

  login(type = '') {
    let method = undefined;
    switch (type) {
      case 'google':
        method = new firebase.auth.GoogleAuthProvider();
        break;
      case 'git':
        method = new firebase.auth.GithubAuthProvider();
        break;
      default:
        method = new firebase.auth.GithubAuthProvider();
        break;
    }

    return this.afAuth.auth.signInWithPopup(method);
  }

  logout() {
    this.isLoggedInChange.emit(false);
    this.afAuth.auth.signOut();
  }
}
