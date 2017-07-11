import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListRssComponent} from './list-rss.component';
import {ListNewsComponent} from './list-news.component';
import {DetailNewsComponent} from './detail-news.component';
import {StatisticsMainComponent} from './statistics-main.component';
import {StatisticsNewsComponent} from './statistics-news.component';
import {StatisticsDetailComponent} from './statistics-detail.component'

const routes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  {path: 'add', component: ListRssComponent},
  {path: 'feed/:id', component: ListNewsComponent},
  {path: 'feed/:id/detail/:numeric', component: DetailNewsComponent},
  {path: 'statsMain', component: StatisticsMainComponent},
  {path: 'statsNews/:id', component: StatisticsNewsComponent},
  {path: 'statsDetail/:id/:numeric', component: StatisticsDetailComponent}
  // {path:'navigation',component: NavigationComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
