import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-url-img',
  templateUrl: './input-url-img.component.html',
  styleUrls: ['./input-url-img.component.css']
})
export class InputUrlImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images: any = [];
  imageLink: string = '';

  addImageLink() {
    if (this.imageLink) {
      this.images.push(this.imageLink);
    }
    
  }
  delimg(img: any){
this.images.splice(this.images.indexOf(img),1)
  }
}

