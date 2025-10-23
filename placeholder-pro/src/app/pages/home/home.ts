// import { PostsComponent } from './../posts/posts';
import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { PostsComponent } from './components/posts/posts';
import { TodosComponent } from "./components/todos/todos";
import { ActivityComponent } from "./components/activity/activity";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, PostsComponent, TodosComponent, ActivityComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
