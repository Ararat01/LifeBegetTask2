import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPostComponent } from "./edit-post/edit-post.component";


const postsRoutes: Routes = [
    {
        path: ':id',
        component: EditPostComponent
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

export class EditPostsRoutingModule { }