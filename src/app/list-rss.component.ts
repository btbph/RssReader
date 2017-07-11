import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {RSSService} from './rss.service';

import {Rss} from './news';


@Component({
  selector: 'app-list-component',
  templateUrl: './list-rss.component.html',
  styleUrls: ['./list-rss.component.scss']
})
export class ListRssComponent implements OnInit { // для проверки графиков https://techcrunch.com/feed/

  listOfFeeds: Rss[] = [];
  constructor (private rss: RSSService, private router: Router) { }

  ngOnInit(): void {
    this.listOfFeeds = this.rss.allRss;
  }

  addFeed(url: string): void {
    this.rss.setFeed(url); // todo возможно  функцию refresh
    // todo сделать валидацию по статусу
    // todo не работает на гифках
    // todo сделать валидацию на повторение новости
    // todo не корректно работает если нет картинки
    this.listOfFeeds = this.rss.allRss;
  }

  deleteFeed(id: string): void {
    this.rss.deleteFeed(id);
  }

  goToDetail(id: string) {
    this.router.navigate(['/feed', id]);
  }

  goToStats(): void {
    this.router.navigate(['/statsMain'])
  }

}
