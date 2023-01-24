import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserModalService } from 'projects/blogging-lib/src/public-api';
import { map, tap } from 'rxjs';
import { Comments, PostResponse } from '../../models/postResponse.model';
import { User } from '../../models/user.model';
import { MyPostService } from '../../services/my-post.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyPostComponent implements OnInit {
  public post!: PostResponse;
  public commentsTree!: Comments[];
  public user!: User;
  public allUsers!: User[];

  constructor(
    public postsService: MyPostService,
    public userModalService: UserModalService
  ) { }

  ngOnInit(): void {
    this.postsService.getPost(1)
      .subscribe(res => {
        this.post = res;
        this.commentsTree = this.buildCommentTree(res.comments);
      });

    this.postsService.getUser(1).subscribe(res => this.user = res);
    this.postsService.getAllUsers().subscribe(res => this.allUsers = res);
  }


  buildCommentTree(comments: Comments[]) {
    let tree: Comments[] = [];
    for (let index = 0; index < comments.length; index++) {
      comments[index].comments = [];
      if (comments[index].respondsTo?.id) {
        let parent = comments.filter(elem => elem.id === comments[index].respondsTo?.id).pop();
        parent?.comments?.push(comments[index]);
      } else tree.push(comments[index]);
    }
    return tree;
  }

  openUserModal(id: number) {
    this.postsService.getUser(id)
      .subscribe(res => {
        const mutualFriends =
        res.id === this.user.id ? [] :
          this.getMutualFriends(res, this.user);
        this.userModalService.getUserModal(res, mutualFriends);
      });
  }

  getMutualFriends(user: User, myUser: User): User[] {
    const mutualFriend = user.friendIds.filter(userId => myUser.friendIds.includes(userId));
    return this.allUsers.filter(user => mutualFriend.includes(user.id))
  }
}