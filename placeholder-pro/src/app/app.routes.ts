import { Routes } from '@angular/router';

import { ClientLayout } from './layouts/client-layout/client-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

import { Home } from './pages/home/home';
import { PostsComponent } from './pages/posts/posts';
import { PostDetailComponent } from './pages/post-detail/post-detail';
import { SearchComponent } from './pages/search/search';
import { AlbumsComponent } from './pages/albums/albums';
import { AuthComponent } from './pages/auth/auth';

// import { TodosComponent } from './pages/todos/todos';

import { Dashboard } from './admin/pages/dashboard/dashboard';
import { AdminUsers } from './admin/pages/users/users';
import { AdminPosts } from './admin/pages/posts/posts';
import { AlbumDetailComponent } from './pages/album-detail/album-detail';
import { TodosComponent } from './pages/todos/todos';
import { ProfileComponent } from './pages/profile/profile';
import { AdminAlbums } from './admin/pages/albums/albums';
import { AdminTodos } from './admin/pages/todos/todos';
import { AdminComments } from './admin/pages/comments/comments';
import { AdminLogin } from './admin/pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayout,
    children: [
      { path: '', component: Home },
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostDetailComponent },
      { path: 'search', component: SearchComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'album-detail', component: AlbumDetailComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'auth', component: AuthComponent },
      // { path: 'users', component: UsersComponent },
      // { path: 'contact', component: ContactPage },
      // { path: 'about', component: AboutPage },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: AdminUsers },
      { path: 'posts', component: AdminPosts },
      { path: 'albums', component: AdminAlbums },
      { path: 'todos', component: AdminTodos },
      { path: 'comments', component: AdminComments },
      { path: 'login', component: AdminLogin },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
