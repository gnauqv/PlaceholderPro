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
  totalLikes = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    // 🧠 Lấy dữ liệu bài viết và bình luận
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(post => this.post = post);

    this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .subscribe((comments: any) => this.comments = comments);
  }

  // ❤️ Tăng lượt thích
  likePost() {
    this.totalLikes++;
  }
}
