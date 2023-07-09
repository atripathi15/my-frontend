import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  pname:string='';
  msg:string='';
  fruits:string[]=[];
  heading:string='';
  path1:string='../assets/images/awesome.jpg';
  title1:string='You are awesome';
  people:any[]=[];
  constructor() { 
    this.people = [
      {"id":101,"pname":"Ram","gender":"Male","age":36},
      {"id":102,"pname":"Sita","gender":"Female","age":37},
      {"id":103,"pname":"Krishna","gender":"Male","age":25},
      {"id":104,"pname":"Radha","gender":"Female","age":26},
      {"id":105,"pname":"Kiran","gender":"Male","age":36}
    ];
  }

  ngOnInit(): void {
  }

  getDate(p:string): void {
   var d = new Date();   
   if(p==='date'){
    this.msg = 'Date is :' + d.toLocaleDateString();
   }
   if(p==='time'){
    this.msg = 'Time is :' + d.toLocaleTimeString();
   }
  }

  displayFruits():void {
    this.heading = "List of fruits";
    this.fruits = ['Apple','Orange','Straberry','Pine'];
  }

}
