import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/forum/post.service';
import { CommentService } from '../../service/forum/comment.service';
import { ReactionService } from '../../service/forum/reaction.service';
import { Post } from '../../models/Post';
import { Comment } from '../../models/Comment';
import { Reaction } from '../../models/Reaction';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  postsList!: Post[];
  commentsList!: Comment[];
  reactionsList!: Reaction[];
  tot = 0;
  idUser= 1;
  constructor(private postService: PostService,private commentService: CommentService ,private reactionService: ReactionService ) { }

  ngOnInit() {
   this.postService.getAllPosts().subscribe(result => {
        this.postsList = result;
        for (let i = 0; i < this.postsList.length; i++) {
                   this.tot = this.tot+1 ;
                 };
      });
   this.commentService.getAllComments().subscribe(result => {
           this.commentsList = result;
         });
   this.reactionService.getAllReactions().subscribe(result => {
           this.reactionsList = result;
         });



  }
addComment(data: Comment,idPost : any) {
    this.commentService.addCommentAndAssignToPostAndUser(data,idPost,this.idUser).subscribe(
      (res: HttpResponse<Comment>) => {
              console.log('Comment added successfully:', res.body);
            },
            (error: any) => {
              console.error('Error adding Comment:', error);
            }
    );
  }


}
