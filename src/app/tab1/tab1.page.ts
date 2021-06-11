import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}


  ngOnInit() {
    let num = 10
    num = 25;
    num=num+12;
    console.log(num);

  }

}
