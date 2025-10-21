import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit, OnDestroy {
    slides = [
    { title: 'Khám phá Thiên nhiên', highlight: '', img: 'https://picsum.photos/id/1018/1600/600', desc: 'Vẻ đẹp hoang sơ và hùng vĩ quanh ta.' },
    { title: 'Mock API Showcase', highlight: 'Mock API ', img: 'https://picsum.photos/id/1015/1600/600', desc: 'Elegant frontend powered by JSONPlaceholder.' },
    { title: 'Bài viết thú vị', img: 'https://picsum.photos/id/1005/1600/600', desc: 'Khám phá ngay <strong>Posts</strong>', link: '/posts' },
    { title: 'Nhiệm vụ cần làm', img: 'https://picsum.photos/id/1024/1600/600', desc: 'Xem danh sách <strong>Todos</strong>', link: '/todos' },
    { title: 'Albums Hình Ảnh', img: 'https://picsum.photos/id/1039/1600/600', desc: 'Khám phá bộ sưu tập <strong>Albums</strong>', link: '/albums' }
  ];

  currentIndex = 0;
  private intervalId?: number;

  ngOnInit(): void {
    this.startAuto();
  }

  ngOnDestroy(): void {
    this.stopAuto();
  }

  private startAuto() {
    this.intervalId = window.setInterval(() => this.next(), 10000);
  }
  private stopAuto() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(i: number): void {
    this.currentIndex = i;
    this.stopAuto();
    // restart after short delay if you want
    setTimeout(() => this.startAuto(), 6000);
  }
}
