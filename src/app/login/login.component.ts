import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userModel } from '../iuser';
import { logedUser, login, loginReducer, logout } from '../reducers/login';
import { userModelNg } from '../reducers/users';
import { UsersRequestService } from '../users-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: '',
  })

  constructor(public fb: FormBuilder, private getAllUsers: UsersRequestService, private router: ActivatedRoute, private store: Store, private rout: Router) { }

  ngOnInit(): void {
  }

  user!: userModel;

  login() {
    this.store.select(userSelector).subscribe((v) => {
      this.user = (v as userModel[]).find(usr => usr.username == this.loginForm.value["username"]) as userModel;
      if (this.user?.address.zipcode == this.loginForm.value["password"]) {
        this.store.dispatch(login({ userlog: this.user }))
      }
    })
    this.rout.navigateByUrl('post')
  }
}

export const featureSelector2 = createFeatureSelector<userModelNg>('users')

export const userSelector = createSelector(
  featureSelector2,
  state => state.users
)