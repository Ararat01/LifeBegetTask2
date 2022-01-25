import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlbumsRequestService } from './albums-request.service';
import { UsersRequestService } from './../users-request.service';
import { albumModel } from './ialbum'
import { userModel } from './../iuser'

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albumsArr: Array<albumModel> = []
  usersArr: Array<userModel> = []
  constructor(private getAllAlbums: AlbumsRequestService, private getAllUsers: UsersRequestService) { }

  ngOnInit(): void {
    this.getUsers()
    this.viewAlbum()
  }

  viewAlbum() {
    this.getAllAlbums.getAlbums(environment.albumsUrl).subscribe(
      res => {
        this.albumsArr = res as albumModel[]
      },
      err => console.log(err.message)
    )

  }

  getUsers() {

    this.getAllUsers.getUsers(environment.usersUrl).subscribe(
      res => {
        this.usersArr = res as userModel[]
      },
      err => console.log(err.message)
    )
  }

  getCurUser(id: number) {
    console.log(this.usersArr[id - 1]);
  }
}
