import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersRequestService {

  constructor(public http: HttpClient) { }

  getUsers(url: string) {
    return this.http.get(url)
  }
}
