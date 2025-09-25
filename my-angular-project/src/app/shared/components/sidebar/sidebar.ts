import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {
  isSidebarClosed = false;

  resources = [
    { name: 'Posts', count: 100, icon: 'fas fa-book', link: '/posts' },
    // { name: 'Comments', count: 500, icon: 'fas fa-comments', link: '' },
    { name: 'Albums', count: 100, icon: 'fas fa-images', link: '/albums' },
    // { name: 'Photos', count: 5000, icon: 'fas fa-photo-film', link: '' },
    { name: 'Todos', count: 200, icon: 'fas fa-check-square', link: '/todos' },
    { name: 'Users', count: 10, icon: 'fas fa-users', link: '/users' }
  ];

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
