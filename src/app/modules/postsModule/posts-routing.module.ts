import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostViewComponent } from "./post-view/post-view.component";
import { PostsComponent } from "./posts/posts.component";


const postsRoutes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: ':id',
        component: PostViewComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(postsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PostsRoutingModule { }