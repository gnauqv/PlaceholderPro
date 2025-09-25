import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-albums',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AdminAlbums implements OnInit {
  albums: any[] = [];
  filteredAlbums: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
      .subscribe(data => {
        this.albums = data;
        this.filteredAlbums = data;
      });
  }

  filterAlbums() {
    const term = this.searchTerm.toLowerCase();
    this.filteredAlbums = this.albums.filter(a =>
      a.title.toLowerCase().includes(term)
    );
  }

  deleteAlbum(id: number) {
    if (confirm('Are you sure you want to delete this album?')) {
      this.filteredAlbums = this.filteredAlbums.filter(a => a.id !== id);
      this.albums = this.albums.filter(a => a.id !== id);
    }
  }
}
