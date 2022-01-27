import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { userModel } from '../../../iuser';
import { postModel } from '../../postsModule/posts/ipost';
import { loginSelector, postSelector, userSelector } from '../../../reducers/createdReducers/createdReducers';

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
    private store: Store,
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
        this.getUserPosts()
      })
  }


  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.currentUserId = id
      this.store.select(userSelector).subscribe((v) => {
        this.user = v.find(el => el.id == id) as userModel;
      })
      if (this.user == undefined) {
        this.route.navigateByUrl('notfound')
      }
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
