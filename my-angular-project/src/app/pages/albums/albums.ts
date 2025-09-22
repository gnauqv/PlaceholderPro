import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Album {
  userId: number;
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe({
        next: (data) => {
          this.albums = data.slice(0, 20); //Lấy 20 albums đầu tiên
          this.loading = false;
        },
        error: (err) => {
          console.error(err);
          this.loading = false;
        }
      });
  }
}
