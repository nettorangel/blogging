import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'projects/blogging-page/src/app/models/postResponse.model';

@Component({
  selector: 'lib-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;
  public postDate!: string;

  constructor() { }

  ngOnInit(): void {
    this.postDate = this.formatDate();
  }

  private formatDate() {
    return new Date(`${this.comment.timestamp}`).toUTCString() + '-0300';
  }

  public setNewReply(reply: string) {
    const newReply: Comments = {
      id: 22,
      respondsTo: { id: this.comment.id },
      author: {
        id: 1,
        username: 'Netto'
      },
      timestamp: new Date().toUTCString() + '+0300',
      content: reply,
      comments: [],
    }
    this.comment.comments?.push(newReply);
  }

}
