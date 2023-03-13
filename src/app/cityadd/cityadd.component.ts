import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cityadd',
  templateUrl: './cityadd.component.html',
  styleUrls: ['./cityadd.component.css']
})
export class CityaddComponent implements OnInit {
firstName:string="Bhoomi";
cities:any=['Ahmedabad','Baroda','Gandhinagar','Mumbai',10 ];

  ngOnInit(): void {
  }
changeName(){
  this.firstName = "ClUmSy";
  this.cities=[];
}
addList(){
  this.cities.push('world is all yours')
}
}
