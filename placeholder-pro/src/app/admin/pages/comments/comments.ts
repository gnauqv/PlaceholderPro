import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-comments',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './comments.html',
  styleUrls: ['./comments.css']
})
export class AdminComments implements OnInit {
  comments: any[] = [];
  filteredComments: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(data => {
        this.comments = data;
        this.filteredComments = data;
      });
  }

  filterComments() {
    const term = this.searchTerm.toLowerCase();
    this.filteredComments = this.comments.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.email.toLowerCase().includes(term)
    );
  }

  deleteComment(id: number) {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.filteredComments = this.filteredComments.filter(c => c.id !== id);
      this.comments = this.comments.filter(c => c.id !== id);
    }
  }
}
