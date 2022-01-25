import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  constructor(public http: HttpClient) { }

  getPosts(url: string) {
    return this.http.get(url)
  }
}
