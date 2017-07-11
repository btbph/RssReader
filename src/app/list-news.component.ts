import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {RSSService} from './rss.service';


import {FeedContent} from './feed-content'


@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})

export class ListNewsComponent implements OnInit {

  currentNews: FeedContent[];

  constructor (private rss: RSSService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { // todo возможно добавить пэйджинг
    // todo выдает две катинки когда в description есть <img>  с картинкой
    this.currentNews = this.rss.getNews(this.route.snapshot.paramMap.get('id'));
  }

  goToDetail(id: string): void {
    this.router.navigate([this.route.snapshot.url[0].toString(),
      this.route.snapshot.url[1].toString(), 'detail', id]);
  }

  goToStats(): void {
    this.router.navigate(['/statsNews', this.route.snapshot.url[1].toString()]);
  }


}
