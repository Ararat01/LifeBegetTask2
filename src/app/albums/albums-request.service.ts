import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsRequestService {

  constructor(public http: HttpClient) { }

  getAlbums(url: string) {
    return this.http.get(url)
  }
}
