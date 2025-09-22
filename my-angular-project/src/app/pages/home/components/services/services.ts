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
    { icon: '🎨', title: 'Creative Design', description: 'Stunning visual experiences...' },
    { icon: '💻', title: 'Development', description: 'Cutting-edge technology solutions...' },
    { icon: '⚡', title: 'Performance', description: 'Lightning-fast implementations...' },
    { icon: '🔒', title: 'Security', description: 'Enterprise-grade protection...' },
    { icon: '🌍', title: 'Global Reach', description: 'Solutions designed to perform...' },
    { icon: '🚀', title: 'Innovation', description: 'Forward-thinking approaches...' }
  ];
}
