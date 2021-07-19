import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OFFERTS_TURING } from './models/DATA_Api';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }
  getPark() {
    return this.http.get<OFFERTS_TURING[]>("http://localhost:3000/OFFERTS_TURING")
  }
  getParkID(id: number) {
    return this.http.get<OFFERTS_TURING>("http://localhost:3000/OFFERTS_TURING/" + id)
  }
}
