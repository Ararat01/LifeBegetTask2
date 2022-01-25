import { Component, OnInit } from '@angular/core';
import { PostRequestService } from './post-request.service';
import { UsersRequestService } from './../users-request.service';
import { postModel } from './ipost'
import { userModel } from './../iuser'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsArr: Array<postModel> = []
  usersArr: Array<userModel> = []
  constructor(private getAllAlbums: PostRequestService, private getAllUsers: UsersRequestService) { }

  ngOnInit(): void {
    this.getUsers()
    this.viewPost()
  }

  viewPost() {
    this.getAllAlbums.getPosts(environment.postsUrl).subscribe(
      res => {
        this.postsArr = res as postModel[]
      },
      err => console.log(err.message)
    )
  }

  getUsers() {

    this.getAllUsers.getUsers(environment.usersUrl).subscribe(
      res => {
        this.usersArr = res as  userModel[]
      },
      err => console.log(err.message)
    )
  }

  getCurUser(id: number) {
    console.log(this.usersArr[id - 1]);
  }

}
