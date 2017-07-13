import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './providers/auth.service';
import { UserService } from './providers/user.service';

import { routing }        from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './user/user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { IfAuthenticationDirective } from './directives/if-authentication.directive';

import {APP_BASE_HREF} from '@angular/common';

export const firebaseConfig = {
    apiKey: "AIzaSyDvZt_ohhTx9SThJFee9fpXYTfD3vHX9Lw",
    authDomain: "authproject-73711.firebaseapp.com",
    databaseURL: "https://authproject-73711.firebaseio.com",
    projectId: "authproject-73711",
    storageBucket: "authproject-73711.appspot.com",
    messagingSenderId: "190137040199"
};

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LoginPageComponent,
    HomePageComponent,
    SearchPageComponent,
    UserDetailsComponent,
    IfAuthenticationDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
