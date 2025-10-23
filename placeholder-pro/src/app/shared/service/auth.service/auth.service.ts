import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<any>(null);
  user$ = this._user.asObservable();

  constructor() {
    // Tự động load user từ localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) this._user.next(JSON.parse(savedUser));
  }

  /** Đăng nhập (mô phỏng backend) */
  async login(email: string, password: string): Promise<any> {
    if (email && password) {
      const user = { email, name: email.split('@')[0] };
      this._user.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Thông tin đăng nhập không hợp lệ!');
    }
  }

  /** Đăng ký (mô phỏng backend) */
  async signup(email: string, password: string): Promise<any> {
    if (email && password.length >= 4) {
      const user = { email, name: email.split('@')[0] };
      this._user.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } else {
      throw new Error('Mật khẩu cần ít nhất 4 ký tự!');
    }
  }

  /** Đăng xuất */
  logout() {
    this._user.next(null);
    localStorage.removeItem('user');
  }

  /** Lấy user hiện tại */
  getCurrentUser() {
    return this._user.value;
  }
}
