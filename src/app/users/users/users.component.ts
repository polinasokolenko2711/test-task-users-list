import { Component, OnDestroy, OnInit } from '@angular/core';

import { ApiService } from './../../shared/services/api.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { filter, takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ChangeConfirmationComponent } from '../change-confirmation/change-confirmation.component';
import { EditUserComponent } from './../edit-user/edit-user.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject<void>();

  public displayedColumns: string[] = ['name', 'email', 'phone', 'edit', 'delete'];

  public users$: Observable<User[]> = this.userService.users$;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.initUsers();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public initUsers(): void {
    this.apiService.getUsers()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(value => this.userService.setUsers(value || []));
  }

  public onEdit(user): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '600px',
      data: user
    });

    dialogRef.afterClosed()
      .pipe(filter(res => !!res))
      .subscribe(result => {
        this.userService.updateUser(result);
      });
  }

  public updateUser(currentValue: string, field: string, user: User): void {
    if (currentValue !== user[field]) {
      const dialogRef = this.dialog.open(ChangeConfirmationComponent, {});
      dialogRef.afterClosed().subscribe(result => {
        user[field] = result ? currentValue : user[field];
        this.userService.updateUser({...user});
      });
    }
  }

  public onAdd(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '600px',
      data: new User({}),
    });

    dialogRef.afterClosed()
      .pipe(filter(res => !!res))
      .subscribe(result => {
          this.userService.addUser(result);
      });
  }

  public onDelete(user): void {
    this.userService.deleteUser(user);
  }
}
