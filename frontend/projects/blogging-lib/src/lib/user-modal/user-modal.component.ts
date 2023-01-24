import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'projects/blogging-page/src/app/models/user.model';

@Component({
  selector: 'lib-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserModalComponent implements OnInit {
  @ViewChild('userPosts') userPosts!: ElementRef;

  constructor(  
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { user : User , mutualFriends: User[]},
  ) { }

  ngOnInit(): void {  }
  
  scrollLeft(){
    this.userPosts.nativeElement.scrollLeft -= 150;
  }

  scrollRight(){
    this.userPosts.nativeElement.scrollLeft += 150;
  }
}
