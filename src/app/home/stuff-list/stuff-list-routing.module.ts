import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StuffListComponent } from "./stuff-list.component";

const routes: Routes = [
    {
        path: "",
        component: StuffListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StuffListRoutingModule {}
