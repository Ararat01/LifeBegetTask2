import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PostViewComponent } from "./post-view/post-view.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsComponent } from "./posts/posts.component";
import { ToUsernamePipe } from "./to-username.pipe";

@NgModule({
    declarations: [
        PostsComponent,
        PostViewComponent,
        ToUsernamePipe
    ],
    imports: [
        CommonModule,
        PostsRoutingModule
    ],
    providers: []
})

export class PostModule{}