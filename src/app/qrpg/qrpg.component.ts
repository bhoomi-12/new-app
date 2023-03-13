import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrpg',
  templateUrl: './qrpg.component.html',
  styleUrls: ['./qrpg.component.css']
})
export class QrpgComponent implements OnInit {

 

  ngOnInit(): void {
  }
  myAngularQRCode:any
  constructor() {
    this.myAngularQRCode = "https://www.youtube.com/watch?v=9CvwbW9UhJc"
   }
}

