import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
alert:boolean=false;
  constructor(private restoService:RestoService) { }
  addResto=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    city:new FormControl('')
  })
  submit(){
    this.restoService.addRestoData(this.addResto.value).subscribe((result)=>{
    })
    this.alert=true;
    this.addResto.reset({});
  }
  changeAlert(){
    this.alert=false;
  }

  ngOnInit(): void {
  }

}
