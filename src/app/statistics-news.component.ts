/**
 * Created by Mikhail Ulyanov on 10.07.2017.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RSSService} from './rss.service';
import {FeedContent} from './feed-content';


@Component({
  selector: 'app-stats-news',
  templateUrl: './statistics-news.html'

})

export class StatisticsNewsComponent implements OnInit {

  private cuurentChanel: FeedContent[];
  private numberOfAuthors: number;

  constructor (private rss: RSSService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cuurentChanel = this.rss.getNews(this.route.snapshot.url[1].toString());
    this.numberOfAuthors = this.countAuthors();
  }

  countAuthors(): number {
    const res: string[] = [];
    for (const item of this.cuurentChanel) {
      if (item.author = '') {
        continue;
      }
      if (!res.find(x => x === item.author)) {
        res.push(item.author);
      }
    }
    return res.length;

  }
}
