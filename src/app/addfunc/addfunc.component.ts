import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-addfunc',
  templateUrl: './addfunc.component.html',
  styleUrls: ['./addfunc.component.css']
})
export class AddfuncComponent implements OnInit {
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addVal: number = 0;
  addVal2: number = 0;
  addList() {
    this.total = this.addVal + this.addVal2
  }
}