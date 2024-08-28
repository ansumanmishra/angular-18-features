import { Component } from '@angular/core';
import {Article, NewsService} from './news.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.articles = this.newsService.getArticles();
  }

}
