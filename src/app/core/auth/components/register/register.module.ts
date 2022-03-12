import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.module";

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule, RouterModule],
    providers: [],
    bootstrap: [RegisterComponent]
})
export class RegisterModule {}
