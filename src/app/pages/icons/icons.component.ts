import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/forum/post.service';
import { CommentService } from '../../service/forum/comment.service';
import { ReactionService } from '../../service/forum/reaction.service';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import { Reaction } from '../../models/Reaction';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  postsList!: Post[];
  commentsList!: Comment[];
  reactionsList!: Reaction[];

  constructor(private postService: PostService,private commentService: CommentService ,private reactionService: ReactionService ) { }

  ngOnInit() {
   this.postService.getAllPosts().subscribe(result => {
        this.postsList = result;
      });
   this.commentService.getAllComments().subscribe(result => {
           this.commentsList = result;
         });
   this.reactionService.getAllReactions().subscribe(result => {
           this.reactionsList = result;
         });
  }
}
