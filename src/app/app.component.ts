import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  keyword = 'demo1';

  data: Article[];
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  constructor(private datasvc: DataService) {
  }

  changekeyword(str: string) {
    this.keyword = str;
  }

  ngOnInit(): void {
    this.datasvc.load().subscribe((value) => {
        this.data = value;
      });
  }
}
