import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  priority?: string;
  priorityClass?: string;
  category?: string;
  author?: string;
  date?: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  imports: [CommonModule],
  styleUrls: ['./todos.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        // Chỉ lấy 8 todo cho demo
        this.todos = data.slice(0, 8).map(todo => ({
          ...todo,
          priority: this.getRandomPriority(),
          priorityClass: this.priorityClass(todo),
          category: this.getRandomCategory(),
          author: this.getRandomAuthor(),
          date: this.getRandomDate()
        }));
      });
  }

  // 🎯 Các hàm random - dùng chung, không tạo mới mỗi lần render

  getRandomPriority(): string {
    const priorities = ['high', 'medium', 'low'];
    return this.randomFromArray(priorities);
  }

  priorityClass(todo: Todo): string {
    return todo.priority || 'low';
  }

  getRandomCategory(): string {
    return this.randomFromArray(['Work', 'Personal', 'Study', 'Health']);
  }

  getRandomAuthor(): string {
    return this.randomFromArray(['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack']);
  }

  getRandomDate(): string {
    const date = new Date(2024, 0, Math.floor(Math.random() * 28) + 1);
    return date.toISOString().split('T')[0];
  }

  // 🧠 Hàm random tái sử dụng
  private randomFromArray<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}
