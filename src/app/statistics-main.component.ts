import {Component, OnInit} from '@angular/core';
import {RSSService} from './rss.service'


@Component({
  selector: 'app-statistics-main',
  templateUrl: './statistics-main.component.html',
  styleUrls: ['./statistics-main.component.scss']
})
export class StatisticsMainComponent implements OnInit {

  private amountOfChannels: number;

  constructor (private rss: RSSService) { }

  ngOnInit(): void  {
    this.amountOfChannels = this.rss.allRss.length;
  }
}
