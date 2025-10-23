import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.html',
  styleUrls: ['./comments.css']
})
export class CommentsComponent implements OnInit {
  post: any;
  comments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const randomId = Math.floor(Math.random() * 100) + 1; // random post 1–100

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${randomId}`)
      .subscribe(data => this.post = data);

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`)
      .subscribe((data: any) => this.comments = data);
  }
}
