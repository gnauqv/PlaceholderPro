import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-detail.html',
  styleUrls: ['./post-detail.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  comments: any[] = [];
  relatedPosts: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(post => this.post = post);

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .subscribe((comments: any) => this.comments = comments);

    this.http.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
      .subscribe((posts: any) => this.relatedPosts = posts);
  }

  getRandomLikes(): number {
    return  Math.floor(Math.random()*20)+1;
  }
}
