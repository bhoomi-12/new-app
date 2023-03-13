import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  infom:Array<any> =[];
  addValue(xyz: any){
    // this.infom.push(xyz);
    console.log(xyz)
  }
  // deleteData(inf: any){
  //   this.infom.splice(this.infom.indexOf(inf),1);
  // }
}
