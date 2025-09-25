// profile.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  user = {
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: 'Romaguera-Crona',
    address: 'Kulas Light, Apt. 556, Gwenborough',
    joined: '2023-05-15',
    bio: 'Passionate developer and content creator...'
  };

  posts = [
    {id:1, title: 'sunt aut facere repellat...', date: '2024-01-15', comments: 5, likes: 12 },
    {id:2, title: 'qui est esse', date: '2024-01-14', comments: 3, likes: 8 },
    {id:3, title: 'ea molestias quasi...', date: '2024-01-13', comments: 8, likes: 15 }
  ];

  albums = [
    { title: 'quidem molestiae enim', date: '2024-01-15', photos: 50 },
    { title: 'sunt qui excepturi', date: '2024-01-14', photos: 35 }
  ];

  activities = [
    { action: 'Published a new post', time: '2 hours ago', color: 'yellow' },
    { action: 'Created a new album', time: '1 day ago', color: 'blue' },
    { action: 'Commented on a post', time: '2 days ago', color: 'green' },
    { action: 'Joined the community', time: '2023-05-15', color: 'purple' }
  ];
}
