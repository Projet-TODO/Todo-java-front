import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signin-dialog',
  templateUrl: './signin-dialog.component.html',
  styleUrls: ['./signin-dialog.component.scss']
})
export class SigninDialogComponent {
  constructor(public dialogRef: MatDialogRef<SigninDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
