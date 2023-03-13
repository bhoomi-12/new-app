import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartngmodel',
  templateUrl: './cartngmodel.component.html',
  styleUrls: ['./cartngmodel.component.css']
})
export class CartngmodelComponent implements OnInit {
  itemName!: string;
  addCart!: number;
  products: Array<string> = [];
  products2: Array<string> = [];
  ngOnInit() {}
  RemoveProduct(item: string) {
    this.products.splice(this.products.indexOf(item), 1);
  }
  RemoveProduct2(item: string) {
    this.products2.splice(this.products2.indexOf(item), 1);
  }
  addList(itm: string, crt: number) {
    if (crt == 1) {
      this.products.push(itm);
    } else {
      this.products2.push(itm);
    }
  }
}
