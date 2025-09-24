import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { CapitalizePipe } from '../../../../shared/pipes/capitalize-pipe';
// import { RouterLink } from "../../../../../../node_modules/@angular/router/router_module.d";

interface Post {
  userId: number,
  id: number;
  title: string;
  body: string;
}

interface Author {
  id: number;
  name: string;

}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html',
  imports: [CommonModule, RouterLink, CapitalizePipe],
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  author: Author[] = [];
  authorMap = new Map<number, string>();
  visiblePosts: Post[] = [];
  currentPage = 0;
  pageSize = 6; // mỗi trang 4 bài
  totalPages = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;
        this.totalPages = Math.ceil(this.posts.length / this.pageSize);
        this.updateVisiblePosts();

        // Lấy danh sách tác giả
        this.loadAuthors();
      });
  }

  loadAuthors(): void {
    this.http.get<Author[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        data.forEach(author => {
          this.authorMap.set(author.id, author.name);
        });
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

  getRandomCategory(): string {
    const categories = ["Technology", "Business", "Lifestyle", "Science", "Design"];
    return categories[Math.floor(Math.random() * categories.length)];
  }

  getRandomAuthor(): string {
    const authors = ["Leanne Graham", "Ervin Howell", "Clementine Bauch"];
    return authors[Math.floor(Math.random() * authors.length)];
  }

  getAuthorName(userId: number): string {
    return this.authorMap.get(userId) || 'Đang tải...';
  }

  getRandomLikes(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  getRandomComments(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  getRandomDate(): string {
    const start = new Date(2024, 0, 1);
    const end = new Date(2024, 1, 28);
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split("T")[0];
  }

  getRandomPostTime(): string {
    const postTime = ["Second", "Minute", "Hour"];
    return (Math.floor(Math.random() * 10)) + " " + postTime[Math.floor(Math.random() * postTime.length)];
  }

  getRandomAvatar(): string {
    const avatars = [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  }


}
