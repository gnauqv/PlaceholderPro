import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.html',
  styleUrls: ['./activity.css']
})
export class ActivityComponent {
  activities = [
    { title: 'New post published', user: 'John Doe', time: '2 hours ago' },
    { title: 'Comment on "React Best Practices"', user: 'Jane Smith', time: '4 hours ago' },
    { title: 'New album created', user: 'Mike Johnson', time: '6 hours ago' },
    { title: 'New user joined', user: 'Sarah Wilson', time: '8 hours ago' }
  ];
}
