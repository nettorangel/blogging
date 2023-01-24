import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from '@angular/material/card';
import { PostHeaderComponent } from './post-header/post-header.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [
    PostHeaderComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    PostHeaderComponent
  ]
})
export class BloggingLibModule { }
