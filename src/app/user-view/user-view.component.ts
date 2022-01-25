import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { userModel } from '../iuser';
import { postModel } from '../posts/ipost';
import { PostRequestService } from '../posts/post-request.service';
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

  constructor(private activateRoute: ActivatedRoute, private usersRequest: UsersRequestService, private postsRequest: PostRequestService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.getUserPosts()
  }


  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.currentUserId = id
      this.usersRequest.getUsers(`${environment.usersUrl}/${id}`).subscribe((v) => {
        this.user = v as userModel
        console.log(this.user);
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
