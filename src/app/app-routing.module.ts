import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
    path: 'user',
    loadChildren: () => import('./modules/userModule/user.module').then(
      module => module.UserModule
    ) 
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
    path: 'postedit',
    loadChildren: () => import('./modules/editPostModule/edit-post.module').then(
      module => module.EditPostModule
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

export class AppRoutingModule {}
