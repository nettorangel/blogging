import { Component, Input, OnInit } from '@angular/core';
import { UserModalService } from 'projects/blogging-lib/src/public-api';
import { Comments } from 'projects/blogging-page/src/app/models/postResponse.model';
import { User } from '../../models/user.model';
import { MyPostService } from '../../services/my-post.service';

@Component({
  selector: 'lib-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comments;
  public postDate!: string;
  public user!: User;
  public allUsers!: User[];

  constructor(
    public postsService: MyPostService,
    public userModalService: UserModalService
  ) { }

  ngOnInit(): void {
    this.postDate = this.formatDate();
    this.postsService.getUser(1).subscribe(res => this.user = res);
    this.postsService.getAllUsers().subscribe(res => this.allUsers = res);
  }

  private formatDate(): string {
    return this.comment?.timestamp ? new Date(`${this.comment.timestamp}`).toUTCString() + '-0300' : '';
  }

  public setNewReply(reply: string) {
    const newReply: Comments = {
      id: 22,
      respondsTo: { id: this.comment.id },
      author: {
        id: 1,
        username: "João Figueiredo"
      },
      timestamp: new Date().toUTCString() + '+0300',
      content: reply,
      comments: [],
    }
    this.comment.comments?.push(newReply);
  }

  public openUserModal(id: number) {
    this.postsService.getUser(id)
      .subscribe(response => {
        const mutualFriends =
          response.id === this.user.id ? [] :
            this.getMutualFriends(response, this.user)
        this.userModalService.getUserModal(response, mutualFriends);
      });
  }

  getMutualFriends(user: User, myUser: User): User[] {
    const mutualFriend = user.friendIds.filter(userId => myUser.friendIds.includes(userId));
    return this.allUsers.filter(user => mutualFriend.includes(user.id))
  }
}
