
import {FeedInfo} from './feed-info';
import {FeedContent} from './feed-content';

export class Rss {
  status: string;
  feed: FeedInfo;
  items: FeedContent[];
  id: string;
}
