import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { postModel } from '../posts/ipost';
import { PostRequestService } from '../posts/post-request.service';
import { postSelector, userSelector } from 'src/app/reducers/createdReducers/createdReducers';
import { userModel } from 'src/app/iuser';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.getPostInfo()
    this.getUsers()
  }

  post!: postModel;
  usersArr!: userModel[];

  getPostInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      this.store.select(postSelector).subscribe((v) => {
        this.post = v.find(el => el.id == id) as postModel;
      })
    },
    err => console.error(err.message))
  }

  getUsers() {
    this.store.select(userSelector).subscribe((v) => {
      this.usersArr = v as userModel[];
    })
  }
}
