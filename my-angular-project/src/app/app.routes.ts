import { Routes } from '@angular/router';

import { ClientLayout } from './layouts/client-layout/client-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

import { Home } from './pages/home/home';
import { PostsComponent } from './pages/posts/posts';
import { PostDetailComponent } from './pages/post-detail/post-detail';
// import { TodosComponent } from './pages/todos/todos';

import { Dashboard } from './admin/dashboard/dashboard';
import { Users } from './admin/users/users';
import { Posts } from './admin/posts/posts';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayout,
    children: [
      { path: '', component: Home },
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:id', component: PostDetailComponent },
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
