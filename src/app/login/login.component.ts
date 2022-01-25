import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

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

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitLogin() {
    console.log(this.loginForm.value);
    
  }

}
