import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  imports: [CommonModule],
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  visiblePosts: Post[] = [];
  currentPage = 0;
  pageSize = 4; // mỗi trang 4 bài
  totalPages = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
        this.totalPages = Math.ceil(this.posts.length / this.pageSize);
        this.updateVisiblePosts();
      });
  }

  updateVisiblePosts() {
    const start = this.currentPage * this.pageSize;
    this.visiblePosts = this.posts.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVisiblePosts();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVisiblePosts();
    }
  }

  goToDetail(id: number) {
    this.router.navigate(['/posts', id]);
  }
}
