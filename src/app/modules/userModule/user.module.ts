import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRoutingModule } from "./user-routing.module";
import { UserViewComponent } from "./user-view/user-view.component";


@NgModule({
    declarations: [
        UserViewComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    providers: []
})

export class UserModule{}