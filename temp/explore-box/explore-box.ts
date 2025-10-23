import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './explore-box.html',
  styleUrls: ['./explore-box.css']
})
export class ExploreBoxComponent {
  isLoggedIn = false;

  constructor(private router: Router) {
    // TODO: gọi AppService để check token thay vì localStorage
    const token = localStorage.getItem('user_token');
    this.isLoggedIn = !!token;
  }

  goToPosts() {
    this.router.navigate(['/posts']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  viewApiRoutes() {
    this.router.navigate(['/api-routes']);
  }
}
