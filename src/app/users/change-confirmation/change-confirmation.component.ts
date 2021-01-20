import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-change-confirmation',
  templateUrl: './change-confirmation.component.html',
  styleUrls: ['./change-confirmation.component.scss']
})
export class ChangeConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

}
