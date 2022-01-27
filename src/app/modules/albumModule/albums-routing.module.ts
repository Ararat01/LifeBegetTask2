import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumsComponent } from "./albums/albums.component";


const albumsRoutes: Routes = [
    {
        path: '',
        component: AlbumsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(albumsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AlbumsRoutingModule { }