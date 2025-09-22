import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.html',
  imports: [ CommonModule ],
  styleUrls: ['./comments.css']
})
export class CommentsComponent implements OnInit {
  post: any;
  comments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Ví dụ: lấy Post #1
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => this.post = data);

    this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .subscribe((data: any) => this.comments = data);
  }
}
