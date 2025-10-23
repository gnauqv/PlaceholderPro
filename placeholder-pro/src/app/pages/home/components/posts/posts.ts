import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../../../shared/pipes/capitalize-pipe';

interface Post { userId: number; id: number; title: string; body: string; }
interface Author { id: number; name: string; }

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, CapitalizePipe],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  visiblePosts: Post[] = [];
  authorMap = new Map<number, string>();

  currentPage = 0;
  pageSize = 6;
  totalPages = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadPosts();
  }

  /** Gọi API lấy danh sách bài viết */
  loadPosts() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
        this.totalPages = Math.ceil(data.length / this.pageSize);
        this.updateVisiblePosts();
        this.loadAuthors();
      });
  }

  /** Gọi API lấy danh sách tác giả */
  loadAuthors() {
    this.http.get<Author[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => users.forEach(u => this.authorMap.set(u.id, u.name)));
  }

  /** Cập nhật bài viết hiển thị theo trang */
  updateVisiblePosts() {
    const start = this.currentPage * this.pageSize;
    this.visiblePosts = this.posts.slice(start, start + this.pageSize);
  }

  /** Điều hướng qua trang kế hoặc trước */
  nextPage() { if (this.currentPage < this.totalPages - 1) this.currentPage++, this.updateVisiblePosts(); }
  prevPage() { if (this.currentPage > 0) this.currentPage--, this.updateVisiblePosts(); }

  /** Chuyển sang trang chi tiết */
  goToDetail(id: number) {
    this.router.navigate(['/posts', id]);
  }

  // ===== Hàm tạo ngẫu nhiên (fake data) =====
  getRandomCategory() {
    return ['Technology', 'Business', 'Lifestyle', 'Science', 'Design']
    [Math.floor(Math.random() * 5)];
  }

  getRandomAuthor() {
    return ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']
    [Math.floor(Math.random() * 3)];
  }

  getRandomComments() { return Math.floor(Math.random() * 10) + 1; }
  getRandomPostTime() {
    const units = ['Second', 'Minute', 'Hour'];
    return `${Math.floor(Math.random() * 10)} ${units[Math.floor(Math.random() * 3)]}`;
  }
  getRandomAvatar() {
    const id = Math.floor(Math.random() * 10) + 1;
    return `https://i.pravatar.cc/150?img=${id}`;
  }
}
