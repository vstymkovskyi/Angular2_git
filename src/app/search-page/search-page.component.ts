import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../providers/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [UserService]
})
export class SearchPageComponent implements OnInit {
  searchChangeObserver;
  searchResults = [];
  noResults: boolean = true;
  emptyField: boolean = true;
  currentView: string;
  userName: string;

  constructor(
      private router: Router,
      private activeRoute: ActivatedRoute,
      private userService: UserService) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if(params['name'] != undefined) {
        this.userName = params['name'];
      }
    });

    this.setCurrentView('table');
    if(this.userName != undefined) {
      this.emptyField = false;
      this.getSearchResults();
    }
  }

  onSearchChange(searchValue: string) {

    if (!this.searchChangeObserver) {
      Observable.create(observer => {
        this.searchChangeObserver = observer;
      }).debounceTime(500) // wait 300ms after the last event before emitting last event
          .distinctUntilChanged() // only emit if value is different from previous value
          .subscribe(value => {
            this.userName = value;
            if(value != '') {
              this.emptyField = false;
              this.router.navigate([], {
                queryParams: { name: this.userName },
                relativeTo: this.activeRoute
              });
              this.getSearchResults();
            } else {
              this.searchResults = [];
              this.emptyField = true;
              this.router.navigate([], {
                queryParams: { },
                relativeTo: this.activeRoute
              });
            }
          });
    }

    this.searchChangeObserver.next(searchValue);
  }

  getSearchResults() {
    this.userService.getUsers(this.userName).subscribe(data => {
      if(data['items'].length > 0) {
        this.searchResults = data['items'];
        this.noResults = false;
      } else {
        this.searchResults = [];
        this.noResults = true;
      }
    });
  }

  setCurrentView(view) {
    this.currentView = view;
  }
}
