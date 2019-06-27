import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  @Input() post :any;
  @Output() n = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.n.emit(this.post.id);
    console.log(this.post.id);
  }

}
