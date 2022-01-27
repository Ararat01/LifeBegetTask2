import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { PostRequestService } from './post-request.service';
import { UsersRequestService } from './../../../users-request.service';
import { postModel } from './ipost'
import { userModel } from './../../../iuser'
import { environment } from 'src/environments/environment';
import { userModelNg } from 'src/app/reducers/users';
import { postModelNg } from 'src/app/reducers/posts';


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


export const featureSelector1 = createFeatureSelector<userModelNg>('users')

export const userSelector = createSelector(
  featureSelector1,
  state => state.users
)


export const featureSelector2 = createFeatureSelector<postModelNg>('posts')

export const postSelector = createSelector(
  featureSelector2,
  state => state.posts
)

