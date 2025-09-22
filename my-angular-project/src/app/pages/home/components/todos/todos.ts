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
  pagedTodos: any[][] = [];
  currentPage: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(data => {
        this.todos = data.slice(0, 12); // lấy demo 12 todo
        this.pagedTodos = this.chunkArray(this.todos, 2); // mỗi slide = 2 todo
      });
  }

  chunkArray(arr: any[], size: number): any[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }

  prev() {
    if (this.currentPage > 0) this.currentPage--;
  }

  next() {
    if (this.currentPage < this.pagedTodos.length - 1) this.currentPage++;
  }
}
