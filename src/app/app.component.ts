import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { userModel } from './iuser';
import { AlbumsRequestService } from './modules/albumModule/albums/albums-request.service';
import { albumModel } from './modules/albumModule/albums/ialbum';
import { postModel } from './modules/postsModule/posts/ipost';
import { PostRequestService } from './modules/postsModule/posts/post-request.service';
import { allPosts } from './reducers/posts';
import { allAlbums } from './reducers/albums';
import { allUsers, userModelNg } from './reducers/users';
import { UsersRequestService } from './services/users-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task2';

  ngOnInit(): void {
    this.getAllUsers.getUsers(`${environment.usersUrl}`).subscribe(
      v => this.store.dispatch(allUsers({ usersArr: v as userModel[] }))
    )
    this.getAllPosts.getPosts(`${environment.postsUrl}`).subscribe(
      v => this.store.dispatch(allPosts({ postsArr: v as postModel[] }))
    )
    this.getAllAlbums.getAlbums(`${environment.albumsUrl}`).subscribe(
      v => this.store.dispatch(allAlbums({ albumsArr: v as albumModel[] }))
    )
  }

  constructor(
    private getAllUsers: UsersRequestService,
    private store: Store,
    private getAllPosts: PostRequestService,
    private getAllAlbums: AlbumsRequestService
  ) { }
}
