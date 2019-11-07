import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

import {FormControl, Validators, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private service:ServiceService) { 
  
  }

  posts:any = [];
  ngOnInit() {
      // http://chessneeds.com//cv/payme-task/assets/data/posts.json
    this.service.getData('../../assets/data/posts.json').subscribe(res=>{
      this.posts = res;
    });
  }
  form = new FormGroup({
    postFormControl :new FormControl('',  Validators.required)
  })
  get postFormControl(){return this.form.get('postFormControl');}
  sharePost(){
    let post = {
      name :"Anonymous",
      username:"anon",
      body:this.form.value.postFormControl,
      imgUrl:"",
      videoUrl:"",
      likes:0
    }
    this.posts.unshift(post)
   console.log(this.form.value.postFormControl)
  }
}
