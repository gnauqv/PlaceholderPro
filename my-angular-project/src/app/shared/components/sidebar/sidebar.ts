import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  albums: any[] = [];
  comments: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/albums?_limit=5')
      .subscribe((data: any) => this.albums = data);

    this.http.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      .subscribe((data: any) => this.comments = data);
  }
}
