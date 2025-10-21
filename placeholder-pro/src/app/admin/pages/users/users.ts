import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class AdminUsers implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
        this.filteredUsers = data;
      });
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.username.toLowerCase().includes(term)
    );
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.filteredUsers = this.filteredUsers.filter(u => u.id !== id);
      this.users = this.users.filter(u => u.id !== id);
    }
  }
}
