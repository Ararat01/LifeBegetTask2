import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { userModel } from '../iuser';
import { loginSelector, loginSelectorUser } from '../reducers/createdReducers/createdReducers';
import { logedUser, logout } from '../reducers/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(loginSelectorUser).subscribe(
      v => this.userLoged = v)
    this.store.select(loginSelector).subscribe(
      v => this.user = v)
  }

  test$ = this.store.select(loginSelector)

  user?: userModel
  userLoged?: Boolean;

  logout() {
    this.store.dispatch(logout())
  }
}



