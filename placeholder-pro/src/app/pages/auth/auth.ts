import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/service/auth.service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent implements OnInit {
  mode: 'login' | 'signup' = 'login';
  email = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'] === 'signup' ? 'signup' : 'login';
    });
  }

  async submit() {
    this.error = '';

    if (this.mode === 'signup' && this.password !== this.confirmPassword) {
      this.error = 'Mật khẩu không khớp!';
      return;
    }

    try {
      if (this.mode === 'login') {
        const user = await this.authService.login(this.email, this.password);
        if (user) this.router.navigate(['/']);
      } else {
        const user = await this.authService.signup(this.email, this.password);
        if (user) this.router.navigate(['/']);
      }
    } catch (e: any) {
      this.error = e.message || (this.mode === 'login' ? 'Đăng nhập thất bại' : 'Đăng ký thất bại');
    }
  }

  switchMode() {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
  }
}
