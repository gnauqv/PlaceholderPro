import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: { city: string; street: string };
  company: { name: string; catchPhrase: string };
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent {
  searchText = '';

  users: User[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'sincere@april.biz',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      address: { city: 'Gwenborough', street: 'Kulas Light' },
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net'
      }
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'shanna@melissa.tv',
      phone: '010-692-6593',
      website: 'anastasia.net',
      address: { city: 'Wisokyburgh', street: 'Victor Plains' },
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency'
      }
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      address: { city: 'McKenziehaven', street: 'Douglas Extension' },
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface'
      }
    }
  ];

  filteredUsers() {
    if (!this.searchText) return this.users;
    return this.users.filter(
      u =>
        u.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        u.username.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getInitials(name: string) {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
