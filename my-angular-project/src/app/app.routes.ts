import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./features/posts/posts').then(m => m.PostsComponent)
  },
  {
    path: 'albums',
    loadComponent: () =>
      import('./features/albums/albums').then(m => m.AlbumsComponent)
  }
];
