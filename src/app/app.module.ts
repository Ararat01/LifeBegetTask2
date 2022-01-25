import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsComponent } from './posts/posts.component';
import { UserViewComponent } from './user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ToUsernamePipe } from './pipes/to-username.pipe';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const route: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'viewpost',
    component: PostViewComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'viewalbum',
    component: AlbumViewComponent
  },
  {
    path: 'user/:id',
    component: UserViewComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumViewComponent,
    AlbumsComponent,
    PostViewComponent,
    PostsComponent,
    UserViewComponent,
    ToUsernamePipe,
    HeaderComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
