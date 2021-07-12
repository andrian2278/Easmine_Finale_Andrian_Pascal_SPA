import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkList } from './models/Parkitems';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }
  getPark(){
    return this.http.get<ParkList[]>("http://localhost:3000/ParkList")
  }
  getParkID(id:number){
    return this.http.get<ParkList>("http://localhost:3000/ParkList/"+id)
  }
}
