import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PostListComponent],
  exports: [PostListComponent]
})
export class PostsModule { }
