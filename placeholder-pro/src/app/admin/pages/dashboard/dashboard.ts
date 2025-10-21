// dashboard.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {
  totalUsers = 0;
  totalPosts = 0;
  totalTodos = 0;

  postsChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: []
  };

  todosChartData: ChartData<'doughnut', number[], string> = {
    labels: ['Completed', 'Pending'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#4CAF50', '#FFC107']
      }
    ]
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    // Users
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => this.totalUsers = users.length);

    // Posts + group by user
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(posts => {
        this.totalPosts = posts.length;
        const grouped = posts.reduce((acc, post) => {
          acc[post.userId] = (acc[post.userId] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);

        this.postsChartData = {
          labels: Object.keys(grouped).map(u => `User ${u}`),
          datasets: [
            {
              data: Object.values(grouped),
              label: 'Posts',
              backgroundColor: '#2109F3'
            }
          ]
        };
      });

    // Todos
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe(todos => {
        this.totalTodos = todos.length;
        const completed = todos.filter(t => t.completed).length;
        const pending = todos.length - completed;

        this.todosChartData = {
          labels: ['Completed', 'Pending'],
          datasets: [
            {
              data: [completed, pending],
              backgroundColor: ['#4CAF50', '#FFC107']
            }
          ]
        };
      });
  }
}
