import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactPage {
  name = '';
  email = '';
  message = '';

  submit() {
    if (!this.name || !this.email || !this.message) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    console.log('Contact form submitted:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    alert('Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm!');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
