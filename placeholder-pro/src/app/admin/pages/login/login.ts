import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class AdminLogin {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      const user = { username: this.username };
      localStorage.setItem('adminUser', JSON.stringify(user));
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Please enter valid credentials!');
    }
  }
}
