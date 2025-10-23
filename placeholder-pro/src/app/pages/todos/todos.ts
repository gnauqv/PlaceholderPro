import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CapitalizePipe } from '../../shared/pipes/capitalize-pipe';

// Định nghĩa kiểu Todo lấy từ API
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, CapitalizePipe],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  searchText = '';
  filter: 'all' | 'completed' | 'pending' = 'all';
  filters: ('all' | 'completed' | 'pending')[] = ['all', 'completed', 'pending'];

  constructor(private http: HttpClient) {}

  // 🔹 Lấy dữ liệu từ API khi component khởi tạo
  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .subscribe({
        next: data => this.todos = data,
        error: err => console.error('Lỗi tải dữ liệu:', err)
      });
  }

  // 🔹 Thống kê
  get completedCount() { return this.todos.filter(t => t.completed).length; }
  get pendingCount() { return this.todos.filter(t => !t.completed).length; }

  // 🔹 Lọc & tìm kiếm
  get filteredTodos(): Todo[] {
    const search = this.searchText.toLowerCase();
    return this.todos.filter(todo => {
      const matchSearch = todo.title.toLowerCase().includes(search);
      const matchFilter =
        this.filter === 'all' ||
        (this.filter === 'completed' && todo.completed) ||
        (this.filter === 'pending' && !todo.completed);
      return matchSearch && matchFilter;
    });
  }

  // 🔹 Toggle trạng thái hoàn thành
  toggleStatus(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
