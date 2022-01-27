import { Component, OnInit } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AlbumsRequestService } from './albums-request.service';
import { albumModel } from './ialbum'
import { UsersRequestService } from 'src/app/users-request.service';
import { userModel } from 'src/app/iuser';
import { userModelNg } from 'src/app/reducers/users';
import { albumModelNg } from 'src/app/reducers/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsArr: Array<albumModel> = []
  usersArr: Array<userModel> = []
  constructor(private getAllAlbums: AlbumsRequestService, private getAllUsers: UsersRequestService, private store: Store) { }

  ngOnInit(): void {
    this.getUsers()
    this.viewAlbum()
  }

  viewAlbum() {
    this.store.select(albumSelector).subscribe((v) => {
      this.albumsArr = v as albumModel[];
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

export const featureSelector2 = createFeatureSelector<albumModelNg>('albums')

export const albumSelector = createSelector(
  featureSelector2,
  state => state.albums
)