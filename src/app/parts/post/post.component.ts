import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input() post;
 postLikes ;
 like = false;
  constructor() { }

  ngOnInit() {
    this.postLikes = this.post.likes;
  }
 onlike(){
   (!this.like)? this.postLikes++ : this.postLikes--;
   this.like = !this.like;
 }
}
