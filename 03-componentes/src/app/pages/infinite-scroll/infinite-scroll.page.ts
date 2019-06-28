import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  constructor() { }
  data = Array(20);
  ngOnInit() {
  }
  loadData() {
  console.log('0FFF')
  }
}
 