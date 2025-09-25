import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent {
  searchTerm: string = '';
  viewMode: 'grid' | 'list' = 'grid';

  albums = [
    {
      title: 'quidem molestiae',
      description: 'A beautiful collection of landscape photos...',
      author: 'Leanne Graham',
      date: '2024-01-15',
      cover: 'https://picsum.photos/id/1018/400/250',
      photoCount: 50
    },
    {
      title: 'sunt qui excepturi',
      description: 'Urban architecture and city life...',
      author: 'Leanne Graham',
      date: '2024-01-14',
      cover: 'https://picsum.photos/id/1025/400/250',
      photoCount: 35
    },
    {
      title: 'omnis laborum',
      description: 'Nature and wildlife photography...',
      author: 'Ervin Howell',
      date: '2024-01-13',
      cover: 'https://picsum.photos/id/1035/400/250',
      photoCount: 42
    },
    {
      title: 'non esse culpa',
      description: 'Portrait photography and human life...',
      author: 'Ervin Howell',
      date: '2024-01-12',
      cover: 'https://picsum.photos/id/1045/400/250',
      photoCount: 28
    },
    {
      title: 'eaque aut omnis',
      description: 'Abstract art and creative styles...',
      author: 'Clementine Bauch',
      date: '2024-01-11',
      cover: 'https://picsum.photos/id/1055/400/250',
      photoCount: 67
    },
    {
      title: 'nulla et',
      description: 'Food photography and culinary culture...',
      author: 'Clementine Bauch',
      date: '2024-01-10',
      cover: 'https://picsum.photos/id/1065/400/250',
      photoCount: 31
    }
  ];

  filteredAlbums() {
    return this.albums.filter(a =>
      a.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  totalPhotos() {
    return this.albums.reduce((sum, a) => sum + a.photoCount, 0);
  }

  averagePhotos() {
    return Math.round(this.totalPhotos() / this.albums.length);
  }
}
