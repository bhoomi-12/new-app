import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-httpclient',
    templateUrl: './httpclient.component.html',
    styleUrls: ['./httpclient.component.css']
  })
export class HttpclientComponent implements OnInit{
  myUrl:string = "https://5e8bb871be5500001689ec86.mockapi.io/api/v1/students";
  posts:Array<any> = [];
  id = "";
  name = "";
  avatar = "";
  updateData:boolean = false;

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  
  clearFormData(){
    this.id = "";
    this.name = "";
    this.avatar = "";
  }

  getData(){
      this._http.get(this.myUrl).subscribe((gdata:any)=>{
        this.posts = gdata;
      });
   }

   SendFormData(){
      let fData:any = {'name':this.name,'avatar':this.avatar};      
      this._http.post(this.myUrl,fData).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
        this.clearFormData();
      }); 
    }
   
    editData(data:any){
      this.updateData = true;
      this.id = data.id;
      this.name = data.name;
      this.avatar = data.avatar;
    }

    modifyData(){     
      this.updateData = false;     
      let fData:any = {'name':this.name,'avatar':this.avatar};
      this._http.put(this.myUrl+"/"+this.id,fData).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
        this.clearFormData();
      }); 
    }
    
    cancelData(){
      this.updateData = false; 
      this.getData();
      this.clearFormData();
    }

    deleteData(data:any){
      this._http.delete(this.myUrl+"/"+data.id,).subscribe((pRes)=>{        
        console.log(pRes);
        this.getData();
      }); }
    }

// import { Component, OnInit } from '@angular/core';
// import { MineserviceService } from '../mineservice.service';
// // import { HttpClient } from '@angular/common/http';
// // import { PostService } from './services/post.service';
// @Component({
//   selector: 'app-httpclient',
//   templateUrl: './httpclient.component.html',
//   styleUrls: ['./httpclient.component.css']
// })

// export class HttpclientComponent implements OnInit {
//   students :any=[];
//   url:any;
//   constructor(private bhoomi: MineserviceService){ }
//   ngOnInit(): void { 
//     this.getData(); 
    
//   }
//   getData(){
// this.bhoomi.getDate().subscribe(res =>{
//   this.students = res;
// })
// }
// studentinfoForm(data:any){
// this.bhoomi.post(this.url,data).subscribe((res:any)=>{console.log(res)})
// }
// }
// users:any;

// constructor(private _httpclient:HttpClient){

// }
// ngOnInit(){

// }
// getData(){
//   this._httpclient.get('https://5e8bb871be5500001689ec86.mockapi.io/api/v1/employees').subscribe((data:any)=>{
//     this.users=data;
//   })

  
// }
// RemoveData(item){
//   this.users.splice(this.users.indexOf(item),1);
// }
// }
