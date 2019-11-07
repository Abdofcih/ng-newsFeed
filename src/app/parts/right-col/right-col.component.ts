import { Component, OnInit } from '@angular/core';


export interface Person {
  name: string;
  matualfrinds: number;
}


@Component({
  selector: 'app-right-col',
  templateUrl: './right-col.component.html',
  styleUrls: ['./right-col.component.css']
})
export class RightColComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  FriendsRequests: Person[] = [
    {
      name: 'Mourad',
      matualfrinds: 25,
    },
    {
      name: 'Ahmed',
      matualfrinds: 13,
    },
    {
      name: 'Abdo',
      matualfrinds: 10,
    }
  ];
  MayKnow: Person[] = [
    {
      name: 'Ali',
      matualfrinds: 6,
    },
    {
      name: 'Karim',
      matualfrinds: 2,
    }
  ];
}
