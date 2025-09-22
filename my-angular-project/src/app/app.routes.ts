import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./pages/posts/posts').then(m => m.PostsComponent)
  },
  {
    path: 'albums',
    loadComponent: () =>
      import('./pages/albums/albums').then(m => m.AlbumsComponent)
  }
];
