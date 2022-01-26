import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userModel } from '../iuser';
import { postModel } from '../postsModule/posts/ipost';
import { PostRequestService } from '../postsModule/posts/post-request.service';
import { UsersRequestService } from './../users-request.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  user!: userModel;
  postsArr: postModel[] = [];
  currentUserId!: number;
  currentUser: userModel | undefined;

  constructor(private activateRoute: ActivatedRoute, private usersRequest: UsersRequestService, private postsRequest: PostRequestService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.getUserPosts()
    this.currentUser = this.checker()
  }


  checker() {
    if(localStorage.hasOwnProperty('user')) {
      const user = localStorage.getItem('user')
      return user !== null ? JSON.parse(user) : undefined
    } 
  }


  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.currentUserId = id
      this.usersRequest.getUsers(`${environment.usersUrl}/${id}`).subscribe((v) => {
        this.user = v as userModel;
      })
    },
    err => console.error(err.message))
  }

  getUserPosts() {
    this.postsRequest.getPosts(`${environment.postsUrl}?userId=${this.currentUserId}`).subscribe((v) => {
      this.postsArr = v as postModel[]
    })
  }
}
