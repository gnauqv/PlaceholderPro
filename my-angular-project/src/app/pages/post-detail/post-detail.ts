import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  imports: [ CommonModule ],
  styleUrls: ['./post-detail.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  comments: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // Lấy post gốc
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(data => this.post = data);

    // Lấy comments theo postId
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .subscribe(data => this.comments = data);
  }
}
