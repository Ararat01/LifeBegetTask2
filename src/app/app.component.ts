import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task2';

  ngOnInit(): void {
    this.userLogedCheck();
  }

  userLogedCheck() {
    if(localStorage.getItem('user')) {
      console.log(localStorage.getItem('user'));
    }
  }

}
