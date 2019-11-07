import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-col',
  templateUrl: './left-col.component.html',
  styleUrls: ['./left-col.component.css']
})
export class LeftColComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  leftColList = {
    main :[
      {name:'News Feed',icon:"assignment"},
      {name:'Messanger',icon:"message"},
      {name:'Watch',icon:"tv"},
      {name:'Marketpalce',icon:"add_shopping_cart"}
    ],
    shortcuts:[
      {name:'My page',icon:"note"},
      {name:'Friend group',icon:"note"},
      {name:'group2',icon:"note"},
      {name:'group3',icon:"note"}
    ],
    explore:[
      {name:'Groups',icon:"note"},
    {name:'Pages',icon:"note"},
    {name:'Events',icon:"note"},
    {name:'Memories',icon:"note"}
    ]
  }
}
