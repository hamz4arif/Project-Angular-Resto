import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url="http://localhost:3000/resturants";
  constructor(private http:HttpClient) { 
    
  }
  getRestoData(){
      return this.http.get(this.url);
  }
  addRestoData(data){

    return this.http.post(this.url,data);
  }
  deleteResturant(id){
    // console.log(`${this.url}/${id}`)
    return this.http.delete(`${this.url}/${id}`);
  }
}
