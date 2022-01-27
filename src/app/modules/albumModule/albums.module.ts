import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlbumsComponent } from "./albums/albums.component";
import { AlbumsRoutingModule } from "./albums-routing.module";
import { ToUsernamePipe } from './to-username.pipe';

@NgModule({
    declarations: [
        AlbumsComponent,
        ToUsernamePipe
    ],
    imports: [
        CommonModule,
        AlbumsRoutingModule
    ],
    providers: []
})

export class AlbumModule{}