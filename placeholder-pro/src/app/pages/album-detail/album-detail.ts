import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetailComponent {
  viewMode: 'grid' | 'list' = 'grid';

  album = {
    title: 'JSONPlaceholder API',
    description:
      'A beautiful collection of landscape photography showcasing the natural beauty of various locations around the world. Each photo captures unique moments and breathtaking scenery.',
    tags: ['Landscape', 'Nature', 'Photography', 'Travel'],
    owner: 'Leanne Graham',
    ownerEmail: 'leanne@example.com',
    likes: 42,
    views: 156,
    created: '2024-01-15',
    updated: '2024-01-16',
    photos: [
      { url: 'https://picsum.photos/id/1018/600/400', title: 'accusamus beatae ad facilis cum similique qui sunt' },
      { url: 'https://picsum.photos/id/1020/600/400', title: 'reprehenderit est deserunt velit ipsam' },
      { url: 'https://picsum.photos/id/1025/600/400', title: 'officia porro iure quia iusto qui ipsa ut modi' },
      { url: 'https://picsum.photos/id/1035/600/400', title: 'culpa odio esse rerum omnis laboriosam' },
      { url: 'https://picsum.photos/id/1045/600/400', title: 'optio molestias id quia eum' },
      { url: 'https://picsum.photos/id/1065/600/400', title: 'et ea vero quia laudantium autem' }
    ]
  };

  relatedAlbums = [
    { title: 'sunt qui excepturi placeat culpa', photos: 35 },
    { title: 'omnis laborum odio', photos: 42 },
    { title: 'eaque aut omnis', photos: 67 }
  ];
}
