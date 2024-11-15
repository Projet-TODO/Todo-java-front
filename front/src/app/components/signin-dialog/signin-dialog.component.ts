import { Component,inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup,FormBuilder, Validators, ReactiveFormsModule, FormControl } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service"
import { Router } from '@angular/router';

@Component({
  selector: "app-signin-dialog",
  templateUrl: "./signin-dialog.component.html",
  styleUrls: ["./signin-dialog.component.scss"],
})
export class SigninDialogComponent {
  protected readonly authService: AuthenticationService = inject(AuthenticationService)
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{12,}$/),
    ]),
  })
  private router: Router = inject(Router)

  constructor(public dialogRef: MatDialogRef<SigninDialogComponent>, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  onCancel(): void {
    this.dialogRef.close()
  }
  onSubmit(): void {
    console.log("Form is valid, starting authentication process...")
    if (this.form.valid) {
      console.log(this.form.value.email, this.form.value.password)
      this.authService.authenticate(this.form.value.email, this.form.value.password).subscribe(() => {
        this.dialogRef.close()
        this.router.navigate(["/"])
      })
    }
  }
}
