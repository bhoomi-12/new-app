import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConsoleReporter } from 'jasmine';
// import {FormControl, FormGroup}from '@angular/forms'
@Component({
  selector: 'app-r-form',
  templateUrl: './r-form.component.html',
  styleUrls: ['./r-form.component.css']
})
export class RFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
newForm = new FormGroup({
  fName: new FormControl ("",[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  lName: new FormControl ("",[Validators.required]),
  city: new FormControl (""),
  state: new FormControl ("")
});
submitForm(xyz:any){
 console.log(xyz)
}
}
