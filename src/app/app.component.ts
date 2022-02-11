import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lesson4';
  userId:number = 1;
  filter:any;
  users:User[] = [
    {
      id: this.userId++,
      name: 'Andrey',
      age: 32,
      registeredData: new Date(2009,11,25),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Alex',
      age: 24,
      registeredData: new Date(2010,10,10),
      admin: true,
    },
    {
      id: this.userId++,
      name: 'Natan',
      age: 27,
      registeredData: new Date(2011,3,28),
      admin: false,
    },{
      id: this.userId++,
      name: 'Den',
      age: 24,
      registeredData: new Date(2004,5,12),
      admin: true,
    },
    {
      id: this.userId++,
      name: 'Nick',
      age: 19,
      registeredData: new Date(2019,1,10),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Ivan',
      age: 33,
      registeredData: new Date(2012,9,30),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Nina',
      age: 20,
      registeredData: new Date(2018,4,1),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Cat',
      age: 24,
      registeredData: new Date(2015,12,1),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Dancel',
      age: 23,
      registeredData: new Date(2020,1,17),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Alex',
      age: 32,
      registeredData: new Date(2007,11,2),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Frank',
      age: 19,
      registeredData: new Date(2017,3,10),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Sonya',
      age: 27,
      registeredData: new Date(2021,10,27),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Sofia',
      age: 24,
      registeredData: new Date(2022,1,2),
      admin: false,
    },
    {
      id: this.userId++,
      name: 'Cat',
      age: 27,
      registeredData: new Date(2017,8,5),
      admin: false,
    }
  ]
}
