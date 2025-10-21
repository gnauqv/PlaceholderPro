import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './admin-sidebar.html',
  styleUrls: ['./admin-sidebar.css']
})
export class AdminSidebar {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
