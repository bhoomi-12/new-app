import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  infom: any;

  constructor() { }

  ngOnInit(): void {
  }
  enrtData(p: any){
    console.log(p);
  }
  addValue(xyz: any){
    this.infom.push(xyz);
    // console.log(xyz)
  }
  deleteData(itm: any): void{
    this.infom.splice(this.infom.indexOf(itm),1);
  }
}
