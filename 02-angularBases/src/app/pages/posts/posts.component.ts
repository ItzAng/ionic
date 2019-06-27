import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(private dataS : DataService) { }
  // posts = [];
  posts :any;
  ngOnInit() {
    this.posts = this.dataS.getPosts();
    // this.dataS.getPosts().subscribe((fn :[])=>{
    //   console.log(fn);
    //   this.posts =fn;
    // },err=>{},()=>{console.log('complete')});
  }

  ngClic(id:number){
      console.log(id);
  }
}
