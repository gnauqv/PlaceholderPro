import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { ServicesComponent } from './components/services/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, ServicesComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}
