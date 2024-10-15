import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { SignupDialogComponent } from "../signup-dialog/signup-dialog.component";
import { SigninDialogComponent } from "../signin-dialog/signin-dialog.component";

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: [{}] = [{}];

  constructor(public dialog: MatDialog) {
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
}
