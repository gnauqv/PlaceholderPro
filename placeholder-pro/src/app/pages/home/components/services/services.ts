import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css']
})
export class ServicesComponent {
  services = [
    { icon: '📖', title: 'Posts', description: 'Latest blog posts and articles', items: 100 },
    { icon: '🖼️', title: 'Albums', description: 'Photo galleries and collections', items: 100 },
    { icon: '👥', title: 'Users', description: 'Community members and authors', items: 10 },
  ];
}
