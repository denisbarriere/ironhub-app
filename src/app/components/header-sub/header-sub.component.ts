// Angular package
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sub',
  templateUrl: './header-sub.component.html',
  styleUrls: ['./header-sub.component.scss']
})
export class HeaderSubComponent implements OnInit {

  bootcampLogo = "/assets/images/course-blue.png";

  constructor() { }

  ngOnInit() {
  }

}
