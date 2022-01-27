import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostRequestService } from './post-request.service';
import { UsersRequestService } from './../../../services/users-request.service';
import { postModel } from './ipost'
import { userModel } from './../../../iuser'
import { postSelector, userSelector } from 'src/app/reducers/createdReducers/createdReducers';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsArr: Array<postModel> = []
  usersArr: Array<userModel> = []
  constructor(private getAllAlbums: PostRequestService, private getAllUsers: UsersRequestService, private store: Store) { }

  ngOnInit(): void {
    this.getUsers()
    this.viewPost()
  }

  viewPost() {
    this.store.select(postSelector).subscribe((v) => {
      this.postsArr = v as postModel[];
    })
  }

  getUsers() {
    this.store.select(userSelector).subscribe((v) => {
      this.usersArr = v as userModel[];
    })
  }

}


