import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
  resturants:any=[];
  constructor(private restoService: RestoService) {}

  ngOnInit(): void {
    this.restoService.getRestoData().subscribe((result) => {
      this.resturants = result;
    });
  }
  deleteResturant(id){
    this.resturants.splice(id-1,1)
    this.restoService.deleteResturant(id).subscribe((result)=>{
    })
  }
}
