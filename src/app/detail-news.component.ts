/**
 * Created by Mikhail Ulyanov on 06.07.2017.
 */
import {Component, OnInit} from '@angular/core';
import {FeedContent} from './feed-content';
import {RSSService} from './rss.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})

export class DetailNewsComponent implements OnInit {

  currentNews: FeedContent;

  constructor(private rss: RSSService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentNews = this.rss.getDetailedNews(this.route.snapshot.paramMap.get('id'), +this.route.snapshot.paramMap.get('numeric'));
  }

  goToStats(): void {
    this.router.navigate(['/statsDetail', this.route.snapshot.paramMap.get('id'), this.route.snapshot.paramMap.get('numeric')]);
  }
}
