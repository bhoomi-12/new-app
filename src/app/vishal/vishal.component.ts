import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vishal',
  templateUrl: './vishal.component.html',
  styleUrls: ['./vishal.component.css']
})
export class VishalComponent implements OnInit {
  ngOnInit(): void {}
  name = [];
   // myClass:string;
   tabSelected: string | undefined;
   tbbi:string[] =[];
   tbtri:string[] = [];
   names = [
     'Muneshsir','Zalak','Grishma','Vishal','Neel','Harsh','Akash','Prachi','peenal','Bhoomi','Pooja','Dipesh','Roger', 'Jatin','Peenal', 'Dhrishil',
   ];
   getNames(name:any) {
     if (name == 'Bhoomi' || name == 'Muneshsir' || name == 'Zalak')
       return 'mee';
     else return 'batchmates';
   }
   remove(name: string) {
       this.names.splice(this.names.indexOf(name), 1);
   }
   addTab(name: string){
     this.tbbi.push(name);
   }
   removebi(tbtwo: string) {
     this.tbbi.splice(this.tbbi.indexOf(tbtwo), 1);
 }
 addbiTab(name: string){
   this.tbtri.push(name);
 }
 removetri(tbthree: string){
   this.tbtri.splice(this.tbtri.indexOf(tbthree),1)
 }
 addtriTab(name: string){
   this.tbbi.push(name);
   }  
}
