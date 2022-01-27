import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { userModel } from '../../../iuser';
import { postModel } from '../posts/ipost';
import { PostRequestService } from '../posts/post-request.service';
import { postModelNg } from 'src/app/reducers/posts';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private postRequest: PostRequestService, private store: Store) { }

  ngOnInit(): void {
    this.getUserInfo()
  }

  post!: postModel;

  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.store.select(postSelector).subscribe((v) => {
        this.post = v.find(el => el.id == id) as postModel;
      })
    },
    err => console.error(err.message))
  }

}


export const featureSelector2 = createFeatureSelector<postModelNg>('posts')

export const postSelector = createSelector(
  featureSelector2,
  state => state.posts
)
