import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../service/auth.service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  show = false;
  mode: 'login' | 'signup' = 'login';
  username = '';
  password = '';

  @Output() authSuccess = new EventEmitter<any>();

  constructor(private authService: AuthService) { }

  /**
   * Mở popup với chế độ login hoặc signup.
   * Nếu popup đang mở, chỉ đổi mode chứ không ẩn popup.
   */
  togglePopup(mode: 'login' | 'signup', event?: Event) {
    if (event) event.preventDefault();

    // Nếu popup đang mở và chỉ đổi mode
    if (this.show && this.mode !== mode) {
      this.mode = mode;
      return;
    }

    // Nếu popup đang tắt, mở popup với mode tương ứng
    this.mode = mode;
    this.show = !this.show;
  }

  /** Gửi form đăng nhập / đăng ký */
  submit() {
    if (!this.username.trim() || !this.password.trim()) return;

    const user = { username: this.username, password: this.password };
    let success = false;

    if (this.mode === 'signup') {
      success = this.authService.signup(user);
    } else {
      success = this.authService.login(user);
    }

    if (success) {
      this.authSuccess.emit(user);
      this.close();
    } else {
      alert('❌ Sai thông tin hoặc tài khoản đã tồn tại.');
    }
  }

  /** Đóng popup và reset form */
  close() {
    this.show = false;
    this.username = '';
    this.password = '';
  }
}
