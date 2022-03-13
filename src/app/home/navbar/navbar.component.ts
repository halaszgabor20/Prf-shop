import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/auth/services/user.service";
@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
    constructor(private readonly router: Router, private readonly userService: UserService) {}

    public navigateTo(url: string): void {
        this.router.navigate([url]);
    }

    public logout(): void {
        this.userService.logout();
    }
}
