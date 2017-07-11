import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing';

import {RSSService} from './rss.service';

import { AppComponent } from './app.component';
import {ListRssComponent} from './list-rss.component';
import {ListNewsComponent} from './list-news.component';
import {DetailNewsComponent} from './detail-news.component';
import {StatisticsMainComponent} from './statistics-main.component';
import {StatisticsNewsComponent} from './statistics-news.component';
import {StatisticsDetailComponent} from './statistics-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRssComponent,
    ListNewsComponent,
    DetailNewsComponent,
    StatisticsMainComponent,
    StatisticsNewsComponent,
    StatisticsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [RSSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
