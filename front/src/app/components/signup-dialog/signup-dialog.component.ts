import { Component,inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from "@angular/forms"
import { AuthenticationService } from "../../services/authentication.service"
import { Users } from 'models/user.model';

@Component({
  selector: "app-signup-dialog",
  templateUrl: "./signup-dialog.component.html",
  styleUrls: ["./signup-dialog.component.scss"],
})
export class SignupDialogComponent {
  protected readonly authService: AuthenticationService = inject(AuthenticationService)
  constructor(public dialogRef: MatDialogRef<SignupDialogComponent>, private formBuilder: FormBuilder) { }
  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).{12,}$/),
    ]),
    firstName: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
  })
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      name: ["", Validators.required],
    })
  }
  onCancel(): void {
    this.dialogRef.close()
  }
  onSubmit(): void {
    console.log("Form is valid, starting authentication process...")
    if (this.form.valid) {
      console.log(this.form.value.email, this.form.value.password)
      const user = {
        last_name_users: this.form.value.name,
        first_name_users: this.form.value.firstName,
        email: this.form.value.email,
        password_users: this.form.value.password,
      }
      this.authService.signup(user).subscribe(() => {
        this.dialogRef.close();
        this.authService.authenticate(this.form.value.email, this.form.value.password).subscribe()
      })
  }
  }
}
