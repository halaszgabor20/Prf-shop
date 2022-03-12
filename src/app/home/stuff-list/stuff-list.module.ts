import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { StuffListComponent } from "./stuff-list.component";
import { StuffListRoutingModule } from "./stuff-list-routing.module";

@NgModule({
    declarations: [StuffListComponent],
    imports: [CommonModule, StuffListRoutingModule, RouterModule],
    providers: [],
    bootstrap: [StuffListComponent]
})
export class StuffListModule {}
