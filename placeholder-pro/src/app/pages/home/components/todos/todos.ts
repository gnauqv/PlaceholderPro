import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.html',
  imports: [ CommonModule ],
  styleUrls: ['./todos.css']
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data.slice(0, 8); // demo 8 todo
      });
  }

  getRandomPriority(): string {
    const priorities = ['high', 'medium', 'low'];
    return priorities[Math.floor(Math.random() * priorities.length)];
  }

  getRandomPriorityClass(): string {
    return this.getRandomPriority();
  }

  getRandomCategory(): string {
    const cats = ['Work', 'Personal', 'Study', 'Health'];
    return cats[Math.floor(Math.random() * cats.length)];
  }

  getRandomAuthor(): string {
    const authors = ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack'];
    return authors[Math.floor(Math.random() * authors.length)];
  }

  getRandomDate(): string {
    const date = new Date(2024, 0, Math.floor(Math.random() * 28) + 1);
    return date.toISOString().split('T')[0];
  }
}
