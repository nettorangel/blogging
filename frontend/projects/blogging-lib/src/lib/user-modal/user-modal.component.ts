import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'projects/blogging-page/src/app/models/user.model';

@Component({
  selector: 'lib-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserModalComponent {

  constructor(  
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user : User , mutualFriends: User[]},
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
