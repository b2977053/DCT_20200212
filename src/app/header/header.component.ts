import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  @Input()
  subtitle = '';
  sitelogo = '/assets/images/logo.png';

  @Output()
  logoClick = new EventEmitter<string>();

  showIcons = false;

  fontSize = 12;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'The Will Will Web';
    }, 2000);
  }

  changeTitle(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename += '！';
    }

    this.logoClick.emit(this.sitename);
  }

  changeSize(evt: WheelEvent) {
    // console.log(evt);

    if (evt.deltaY > 0) {
      this.fontSize++;
    } else {
      this.fontSize--;
    }

    evt.preventDefault();
  }

}
