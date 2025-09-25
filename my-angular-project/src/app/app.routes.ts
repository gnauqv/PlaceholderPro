import { Routes } from '@angular/router';

import { ClientLayout } from './layouts/client-layout/client-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

import { Home } from './pages/home/home';
import { PostsComponent } from './pages/posts/posts';
import { PostDetailComponent } from './pages/post-detail/post-detail';
import { SearchComponent } from './pages/search/search';
import { AlbumsComponent } from './pages/albums/albums';

// import { TodosComponent } from './pages/todos/todos';

import { Dashboard } from './admin/dashboard/dashboard';
import { Users } from './admin/users/users';
import { Posts } from './admin/posts/posts';
import { AlbumDetailComponent } from './pages/album-detail/album-detail';
import { TodosComponent } from './pages/todos/todos';
import { UsersComponent } from './pages/users/users';
import { ProfileComponent } from './pages/profile/profile';
import { ContactPage } from './pages/contact/contact';
import { AboutPage } from './pages/about/about';

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
      { path: 'users', component: UsersComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'contact', component: ContactPage },
      { path: 'about', component: AboutPage },
      // { path: 'todos', component: TodosComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'posts', component: Posts },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
