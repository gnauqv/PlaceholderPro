import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  albums: any[] = [];
  comments: any[] = [];
  postContent = '';
  isSidebarClosed = false;

  constructor(private http: HttpClient) {
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums?_limit=5')
      .subscribe(data => this.albums = data);

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .subscribe(data => this.comments = data);
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  createPost() {
    if (!this.postContent.trim()) return;
    console.log('Post created:', this.postContent);
    this.postContent = '';
  }
}
