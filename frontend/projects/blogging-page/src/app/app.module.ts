import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyPostComponent } from './pages/my-post/my-post.component';
import { BloggingLibModule } from 'projects/blogging-lib/src/public-api';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CommentComponent } from './components/comment/comment.component';
import { ReplyCommentComponent } from './components/comment/reply-comment/reply-comment.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MyPostComponent,
    CommentComponent,
    ReplyCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BloggingLibModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
