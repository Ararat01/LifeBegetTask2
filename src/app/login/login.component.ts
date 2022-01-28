import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userModel } from '../iuser';
import { userSelector } from '../reducers/createdReducers/createdReducers';
import { login } from '../reducers/login';

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

  constructor(public fb: FormBuilder, private store: Store, private rout: Router) { }

  ngOnInit(): void {
  }

  user!: userModel;

  login() {
    this.store.select(userSelector).subscribe((v) => {
      this.user = (v as userModel[]).find(usr => usr.username == this.loginForm.value["username"]) as userModel;
      if (this.user.address.zipcode == this.loginForm.value["password"]) {
        this.store.dispatch(login({ userlog: this.user }))
        this.rout.navigateByUrl(`user/${this.user.id}`)
      }
    })
  }

}
