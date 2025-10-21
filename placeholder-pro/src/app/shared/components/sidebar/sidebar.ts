import { Component, HostListener } from '@angular/core';
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
  screenWidth: number = window.innerWidth;
  isUserMenuOpen = false;

  menu = [
    { name: 'Posts', icon: 'fas fa-book', link: '/posts' },
    { name: 'Albums', icon: 'fas fa-images', link: '/albums' },
    { name: 'Todos', icon: 'fas fa-check-square', link: '/todos' },
    { name: 'Users', icon: 'fas fa-users', link: '/users' },
    { name: 'Quang', icon: 'fas fa-user-gear', link: '/users' }
  ];

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  logout() {
    console.log('User logged out');
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    this.isSidebarClosed = this.screenWidth < 768;
  }

  // Ẩn dropdown khi click ra ngoài
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-info') && !target.closest('.user-dropdown')) {
      this.isUserMenuOpen = false;
    }
  }
}
