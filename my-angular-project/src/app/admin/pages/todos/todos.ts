import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-todos',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class AdminTodos implements OnInit {
  todos: any[] = [];
  filteredTodos: any[] = [];
  searchTerm: string = '';
  statusFilter: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data;
        this.filteredTodos = data;
      });
  }

  filterTodos() {
    const term = this.searchTerm.toLowerCase();
    this.filteredTodos = this.todos.filter(t =>
      t.title.toLowerCase().includes(term) &&
      (this.statusFilter === '' ||
        (this.statusFilter === 'completed' && t.completed) ||
        (this.statusFilter === 'pending' && !t.completed))
    );
  }

  toggleStatus(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(id: number) {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.filteredTodos = this.filteredTodos.filter(t => t.id !== id);
      this.todos = this.todos.filter(t => t.id !== id);
    }
  }
}
