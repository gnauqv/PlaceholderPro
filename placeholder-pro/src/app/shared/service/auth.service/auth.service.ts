import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userKey = 'user'; // key trong localStorage
  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  private getUserFromStorage() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  signup(user: any) {
    // Demo: không kiểm tra trùng user, thực tế cần API
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
    return true;
  }

  login(user: any) {
    // Demo: login giống signup (chỉ lưu user vào local)
    // Nếu có API thì sẽ check username/password
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
    return true;
  }

  logout() {
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }

  get currentUser() {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
