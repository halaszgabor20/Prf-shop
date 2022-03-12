import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth.guard";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login",
        loadChildren: () => import("./core/auth/components/login/login.module").then(m => m.LoginModule)
    },
    {
        path: "register",
        loadChildren: () => import("./core/auth/components/register/register.module").then(m => m.RegisterModule)
    },
    {
        path: "home/stuff-list",
        canActivate: [AuthGuard],
        loadChildren: () => import("./home/stuff-list/stuff-list.module").then(m => m.StuffListModule)
    },
    {
        path: "not-found",
        loadChildren: () => import("./general/not-found/not-found.module").then(m => m.NotFoundModule)
    },
    { path: "**", redirectTo: "/not-found" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
