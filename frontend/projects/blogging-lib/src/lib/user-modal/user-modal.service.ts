import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'projects/blogging-page/src/app/models/user.model';
import { UserModalComponent } from './user-modal.component';

@Injectable({
  providedIn: 'root'
})
export class UserModalService {

  constructor( public dialog: MatDialog ) {}

  public getUserModal(user: User, mutualFriends: User[]): void {
    this.dialog.open(UserModalComponent, {
      width: '560px',
      minHeight: '720px',
      height: 'auto',
      data:{user, mutualFriends} 
    });
  }
}
