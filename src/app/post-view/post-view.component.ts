import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { userModel } from '../iuser';
import { postModel } from '../posts/ipost';
import { PostRequestService } from '../posts/post-request.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private postRequest: PostRequestService) { }

  ngOnInit(): void {
    this.getUserInfo()
    this.currentUser = this.checker()
  }

  currentUser: userModel | undefined;
  post!: postModel;

  checker() {
    if(localStorage.hasOwnProperty('user')) {
      const user = localStorage.getItem('user')
      return user !== null ? JSON.parse(user) : undefined
    } 
  }

  getUserInfo() {
    this.activateRoute.params.subscribe(({ id }) => {
      console.log(id);
        this.postRequest.getPosts(`${environment.postsUrl}/${id}`).subscribe((v) => {
          if(this.currentUser?.id == (v as postModel).userId) {
            console.log('Your post')
          }
          console.log(v as postModel)
          this.post = v as postModel
        })
    },
    err => console.error(err.message))
  }

}
