import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { EditPostsRoutingModule } from "./edit-post-routing.module";
import { EditPostComponent } from "./edit-post/edit-post.component";

@NgModule({
    declarations: [
        EditPostComponent
    ],
    imports: [
        CommonModule,
        EditPostsRoutingModule,
        ReactiveFormsModule 
    ],
    providers: []
})

export class EditPostModule{}