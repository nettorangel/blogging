import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentComponent } from './comment/comment.component';
import { ReplyCommentComponent } from './comment/reply-comment/reply-comment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PostHeaderComponent } from './post-header/post-header.component';

@NgModule({
  declarations: [
    CommentComponent,
    ReplyCommentComponent,
    PostHeaderComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    CommentComponent,
    PostHeaderComponent
  ]
})
export class BloggingLibModule { }
