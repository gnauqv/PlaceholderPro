import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class AdminPosts implements OnInit {
  posts: any[] = [];
  filteredPosts: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
        this.filteredPosts = data;
      });
  }

  filterPosts() {
    const term = this.searchTerm.toLowerCase();
    this.filteredPosts = this.posts.filter(p =>
      p.title.toLowerCase().includes(term) ||
      p.body.toLowerCase().includes(term)
    );
  }

  deletePost(id: number) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.filteredPosts = this.filteredPosts.filter(p => p.id !== id);
      this.posts = this.posts.filter(p => p.id !== id);
    }
  }
}
