import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { userModel } from '../iuser';
import { postModel } from '../modules/postsModule/posts/ipost';
import { PostRequestService } from '../modules/postsModule/posts/post-request.service';
import { logedUser } from '../reducers/login';
import { postModelNg } from '../reducers/posts';
import { userModelNg } from '../reducers/users';
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
  subs!: Subscription 


  constructor(
    private activateRoute: ActivatedRoute,
    private usersRequest: UsersRequestService,
    private postsRequest: PostRequestService,
    private store: Store,
    private readonly cdr: ChangeDetectorRef,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.getUserPosts()
    this.getLogedUser()
    this.subs = this.route.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe(() => {
      console.log(1);
      this.getUserPosts()
    })
  }


  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.currentUserId = id
      this.store.select(userSelector).subscribe((v) => {
        this.user = v.find(el => el.id == id) as userModel;
      })
    },
      err => console.error(err.message))
  }

  getUserPosts() {
    this.store.select(postSelector).subscribe((v) => {
      this.postsArr = v.filter(el => el.userId == this.currentUserId) as postModel[];
    })
  }

  getLogedUser() {
    this.store.select(loginSelector).subscribe((v) => {
      this.currentUser = v as userModel
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

export const featureSelector3 = createFeatureSelector<logedUser>('logedUser')

export const loginSelector = createSelector(
  featureSelector3,
  state => state.user
)