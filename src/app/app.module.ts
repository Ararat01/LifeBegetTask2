import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsComponent } from './posts/posts.component';
import { UserViewComponent } from './user-view/user-view.component';
import { HttpClientModule } from '@angular/common/http';
import { ToUsernamePipe } from './pipes/to-username.pipe';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'viewpost/:id',
    component: PostViewComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'user/:id',
    component: UserViewComponent
  },
  {
    path: '**',
    component: ErrorComponent
  },
  
];

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
