import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent implements OnInit {
  query: string = '';

  posts: any[] = [];
  users: any[] = [];
  albums: any[] = [];
  todos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) {
        this.searchAll();
      }
    });
  }

  searchAll() {
    const q = this.query.toLowerCase();

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data.filter(p => p.title.toLowerCase().includes(q)).slice(0, 3);
      });

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data.filter(u => u.name.toLowerCase().includes(q)).slice(0, 3);
      });

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(data => {
        this.albums = data.filter(a => a.title.toLowerCase().includes(q)).slice(0, 3);
      });

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data.filter(t => t.title.toLowerCase().includes(q)).slice(0, 3);
      });
  }

  goToFull(type: string) {
    this.router.navigate(['/search', type], { queryParams: { q: this.query } });
  }
}
