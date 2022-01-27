import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './modules/postsModule/posts/posts.component';


const route: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/:id',
    component: UserViewComponent
  },
  {
    path: 'albums',
    loadChildren: () => import('./modules/albumModule/albums.module').then(
      module => module.AlbumModule
    ) 
  },
  {
    path: 'post',
    loadChildren: () => import('./modules/postsModule/posts.module').then(
      module => module.PostModule
    ) 
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(route, { scrollPositionRestoration: 'enabled' })//, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
