import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CommentListComponent],
  exports: [CommentListComponent],
})
export class CommentsModule { }
