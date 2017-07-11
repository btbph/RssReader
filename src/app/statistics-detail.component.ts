/**
 * Created by Mikhail Ulyanov on 10.07.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RSSService} from './rss.service';
import {ActivatedRoute} from '@angular/router';
import {FeedContent} from './feed-content'

@Component({
  selector: 'app-statistics-detail',
  templateUrl: './statistics-detail.component.html'
})

export class StatisticsDetailComponent implements OnInit {

  // diagram options
  private view: any[] = [700, 400];
  private showLabels = true;
  private explodeSlices = false;
  private doughnut = false;
  private showLegend = false;

  private detail: FeedContent;
  private tmp: any[];

  constructor (private rss: RSSService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.detail = this.rss.getDetailedNews(this.route.snapshot.paramMap.get('id'),
      +this.route.snapshot.paramMap.get('numeric'));
    this.tmp = this.countLatinWords();
  }



  private foundElem(key: string, arr: any[]): number {
    let i = 0;
    for (const item of arr)
    {
      if (item.name === key) {
        return i;
      }
      i++;
    }
      return undefined;
  }

  countLatinWords(): any[] {
    // let res: any[] = [];
    const res: any[] = [];
    const str = 'az';
    const code_a = str.charCodeAt(0);
    const code_z = str.charCodeAt(1);
    let i = 0;
    this.detail.description = this.detail.description.toLowerCase();
    for (const symbol of this.detail.description) {
      if ((code_a <= symbol.charCodeAt(0)) && (symbol.charCodeAt(0) <= code_z)) {
        const tmp = this.foundElem(symbol, res);
        if (tmp === undefined) {
          res.push({'name': symbol, 'value': 1});
        } else {
          res[tmp].value++;
        }
      }
      i++;
    }
    return res;
  }

}
