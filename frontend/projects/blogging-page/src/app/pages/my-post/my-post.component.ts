import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Comments, PostResponse } from '../../models/postResponse.model';
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

  constructor(public postsService: MyPostService) { }

  ngOnInit(): void {
    this.postsService.getPost(1)
      .subscribe(response => {
        this.post = response;
        this.commentsTree = this.buildCommentTree(response.comments);
        console.log('this.commentsTree',this.commentsTree)
      })
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
}