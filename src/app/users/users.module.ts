import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from './../shared/shared.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ChangeConfirmationComponent } from './change-confirmation/change-confirmation.component';


@NgModule({
  declarations: [UsersComponent, EditUserComponent, ChangeConfirmationComponent],
  imports: [
    UsersRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsersModule { }
