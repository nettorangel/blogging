import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReplyCommentComponent {
  @Output() newReply = new EventEmitter<string>();

  public showReplyInput: boolean = false;
  public replyValue!:string;

  constructor() { }


  public changeReply(status?:boolean): void {
    this.replyValue = "";
    this.showReplyInput = status ? status : !this.showReplyInput;
  }

  public setNewReply(): void {
    const value = this.replyValue.trim();
    if(value) {
      this.newReply.emit(value);
      this.changeReply(false);
    } 
  }
}
