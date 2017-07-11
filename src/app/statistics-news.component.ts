/**
 * Created by Mikhail Ulyanov on 10.07.2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RSSService} from './rss.service';
import {FeedContent} from './feed-content';


@Component({
  selector: 'app-stats-news',
  templateUrl: './statistics-news.html',
  styleUrls: ['./statistics-news.component.scss']

})

export class StatisticsNewsComponent implements OnInit {

  private curentChanel: FeedContent[];
  private numberOfAuthors: number;

  constructor (private rss: RSSService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.curentChanel = this.rss.getNews(this.route.snapshot.url[1].toString());
    this.numberOfAuthors = this.countAuthors();
  }

  private findAuthor(author: string, arr: string[]): boolean {
    for (const item of arr) {
      if (author === item) {
        return true;
      }
    }
    return false;
  }

  countAuthors(): number {
    const res: string[] = [];
    for (const item of this.curentChanel) {
      if (item.author = ' ') {
        continue;
      }
      if (!this.findAuthor(item.author, res)) {
        res.push(item.author);
      }
    }
    return res.length;

  }
}
