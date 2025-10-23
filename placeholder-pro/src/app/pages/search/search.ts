import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../../shared/pipes/capitalize-pipe';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink, CapitalizePipe],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent implements OnInit {
  query = '';
  results: Record<string, any[]> = {};
  visibleCounts: Record<string, number> = {}; // số lượng hiển thị từng loại

  // Các loại API cần tìm
  apis = [
    { key: 'posts', label: 'Bài viết' },
    { key: 'users', label: 'Người dùng' },
    { key: 'albums', label: 'Album' },
    { key: 'todos', label: 'Công việc' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) this.searchAll();
    });
  }

  /** Gọi API JSONPlaceholder và lọc theo query */
  searchAll() {
    const q = this.query.toLowerCase();

    this.apis.forEach(api => {
      this.http.get<any[]>(`https://jsonplaceholder.typicode.com/${api.key}`)
        .subscribe(data => {
          const field = api.key === 'users' ? 'name' : 'title';
          const filtered = data.filter(item =>
            item[field]?.toLowerCase().includes(q)
          );

          // Lưu kết quả + set số lượng hiển thị ban đầu
          this.results[api.key] = filtered;
          this.visibleCounts[api.key] = 5; // ban đầu chỉ hiển thị 5
        });
    });
  }

  /** Tăng số lượng hiển thị thêm 5 mục */
  showMore(type: string) {
    this.visibleCounts[type] += 5;
  }

  /** Điều hướng tới trang xem toàn bộ kết quả của loại đó */
  goToFull(type: string) {
    this.router.navigate([type]);
    // this.router.navigate(['/search', type], { queryParams: { q: this.query } });
  }
}
