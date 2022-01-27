import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlbumsRequestService } from './albums-request.service';
import { albumModel } from './ialbum'
import { UsersRequestService } from 'src/app/services/users-request.service';
import { userModel } from 'src/app/iuser';
import { albumSelector, userSelector } from 'src/app/reducers/createdReducers/createdReducers';

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
