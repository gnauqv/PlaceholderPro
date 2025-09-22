import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  isPopupOpen = false;

  constructor(private eRef: ElementRef) { }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  logout() {
    console.log('Logging out...');
    this.isPopupOpen = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isPopupOpen = false;
    }
  }
}
