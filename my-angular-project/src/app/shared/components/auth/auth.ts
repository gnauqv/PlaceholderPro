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

  constructor(private authService: AuthService) {}

  togglePopup(mode: 'login' | 'signup') {
    this.mode = mode;
    this.show = !this.show;
  }

  submit() {
    if (!this.username || !this.password) return;

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
    }
  }

  close() {
    this.show = false;
    this.username = '';
    this.password = '';
  }
}
