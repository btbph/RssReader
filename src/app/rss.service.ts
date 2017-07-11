/**
 * Created by Mikhail Ulyanov on 04.07.2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {Rss} from './news';
import {FeedContent} from './feed-content';

@Injectable()
export class RSSService {


  public allRss: Rss[] = [];

  constructor(private http: Http) {}

  setFeed(url: string): void {
    const urlConverter = 'https://api.rss2json.com/v1/api.json?rss_url=';
     this.http
       .get(urlConverter + url)
       .subscribe(response => {
       const subs = <Rss>response.json();
       subs.id = this.generateID();
       this.allRss.push(subs);
     })
  }

  getNews(id: string): FeedContent[] {
    for (const item of this.allRss) {
      if (item.id === id) {
          return item.items;
      }
    }

  }

  getDetailedNews(id: string, numeric: number): FeedContent {
    for (const item of this.allRss) {
      if (item.id === id) {
        return item.items[numeric];
      }
    }
  }


  deleteFeed(id: string) {
    let i = 0;
    for (const item of this.allRss) {
        if (item.id === id) {
          break;
        }
        i++;
    }
    this.allRss.splice(i, 1);
  }


  private generateID(): string {
    return  Math.random().toString(36).substr(2, 9);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
