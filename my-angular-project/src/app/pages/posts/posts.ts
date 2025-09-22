import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService, Post } from '../../services/posts';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = true;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0,50);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
