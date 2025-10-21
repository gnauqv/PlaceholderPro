// import { PostsComponent } from './../posts/posts';
import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';
import { PostsComponent } from './components/posts/posts';
import { CommentsComponent } from "./components/comments/comments";
import { TodosComponent } from "./components/todos/todos";
import { ActivityComponent } from "./components/activity/activity";
import { ExploreBoxComponent } from "./components/explore-box/explore-box";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, ServicesComponent, PostsComponent, CommentsComponent, TodosComponent, ActivityComponent, ExploreBoxComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
