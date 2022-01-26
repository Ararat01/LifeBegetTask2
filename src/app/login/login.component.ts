import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { userModel } from '../iuser';
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

  constructor(public fb: FormBuilder, private getAllUsers: UsersRequestService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  user!: Array<userModel>;

  submitLogin() {
    this.getAllUsers.getUsers(`${environment.usersUrl}/?username=${this.loginForm.value["username"]}`).subscribe(
      res => {
        this.user = res as userModel[];
        if(this.user[0]?.address.zipcode == this.loginForm.value["password"]){
          localStorage.setItem('user', JSON.stringify(this.user[0]))
          location.assign('/post')
        }
        else {
          console.log('not found');
        }
      },
      err => console.log(err.message)
    )
  }

}
