import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SignupDialogComponent } from "../signup-dialog/signup-dialog.component";
import { SigninDialogComponent } from "../signin-dialog/signin-dialog.component";
import { AuthenticationService } from "services/authentication.service";
import { Router } from "@angular/router";


@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: [{}] = [{}];

  constructor(public dialog: MatDialog, protected readonly authService: AuthenticationService, private router: Router) {
    this.links.push({ name: "Sign up", href: "signup" });
    this.links.push({ name: "Sign in", href: "signin" });
  }

  openSignupDialog(): void {
    this.dialog.open(SignupDialogComponent, {
      width: '600px',
    });
  }

  openSigninDialog(): void {
    this.dialog.open(SigninDialogComponent, {
      width: '600px',
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  navProject(): void {
    this.router.navigate(["/projects"]);
  }
}
