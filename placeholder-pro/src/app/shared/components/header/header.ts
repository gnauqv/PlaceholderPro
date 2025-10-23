import { Component, HostListener, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth/auth';
import { AuthService } from '../../service/auth.service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, AuthComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  user: any;
  @ViewChild(AuthComponent) authPopup!: AuthComponent;

  isPopupOpen = false;

  constructor(
    private eRef: ElementRef,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Theo dõi trạng thái user từ service
    this.authService.user$.subscribe(u => {
      this.user = u;
    });
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  logout() {
    this.authService.logout();
    this.isPopupOpen = false;
    this.user = null;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isPopupOpen = false;
    }
  }

  onSearchChange(event: any) {
    const query = event.target.value.trim();
    if (query.length > 0) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    } else {
      this.router.navigate(['/']);
    }
  }

  openAuth(mode: 'login' | 'signup') {
    this.authPopup.togglePopup(mode);
  }
}
