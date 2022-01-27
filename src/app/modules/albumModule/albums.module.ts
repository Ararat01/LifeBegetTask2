import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlbumsComponent } from "./albums/albums.component";
import { AlbumsRoutingModule } from "./albums-routing.module";

@NgModule({
    declarations: [
        AlbumsComponent
    ],
    imports: [
        CommonModule,
        AlbumsRoutingModule
    ],
    providers: []
})

export class AlbumModule{}