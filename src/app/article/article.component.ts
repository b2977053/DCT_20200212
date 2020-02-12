import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: Article;
  @Input()
  index: any;
  constructor() { }

  ngOnInit(): void {
  }

}
