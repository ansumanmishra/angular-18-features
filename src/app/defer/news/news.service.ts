import { Injectable } from '@angular/core';

export interface Article {
  title: string;
  imageUrl: string;
  comments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: Article[] = [
    {
      title: 'Article 1',
      imageUrl: 'https://picsum.photos/id/7/200/300',
      comments: ['Article 1 Comment 1', 'Article 1 Comment 2', 'Article 1 Comment 3']
    },
    {
      title: 'Article 2',
      imageUrl: 'https://picsum.photos/id/14/200/300',
      comments: ['Article 2 Comment 1', 'Article 2 Comment 2', 'Article 2 Comment 3']
    },
    {
      title: 'Article 3',
      imageUrl: 'https://picsum.photos/id/15/200/300',
      comments: ['Article 3 Comment 1', 'Article 3 Comment 2', 'Article 3 Comment 3']
    }
];

  getArticles(): Article[] {
    return this.articles;
  }
}