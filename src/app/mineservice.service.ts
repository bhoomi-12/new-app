import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MineserviceService {
  private url = "https://5e8bb871be5500001689ec86.mockapi.io/api/v1/students"
  post: any;
  constructor(private _httpsclient: HttpClient) { }
    getDate(){
      return this._httpsclient.get(this.url);
    }
  
}
