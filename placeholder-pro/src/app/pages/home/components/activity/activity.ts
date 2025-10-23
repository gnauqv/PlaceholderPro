import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  title: string;
  user: string;
  time: string;
}

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity.html',
  styleUrls: ['./activity.css']
})
export class ActivityComponent {
  activities: Activity[] = [
    { title: 'New post published', user: 'John Doe', time: '2 hours ago' },
    { title: 'Comment on "React Best Practices"', user: 'Jane Smith', time: '4 hours ago' },
    { title: 'New album created', user: 'Mike Johnson', time: '6 hours ago' },
    { title: 'New user joined', user: 'Sarah Wilson', time: '8 hours ago' }
  ];

  // 🔹 Nếu anh muốn sau này dữ liệu load từ API:
  // ngOnInit() {
  //   this.http.get<Activity[]>('https://api.example.com/activities')
  //     .subscribe(data => this.activities = data);
  // }
}
