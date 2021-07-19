
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';
import { OFFERTS_TURING } from '../models/DATA_Api';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
   offerts:OFFERTS_TURING[]=[];
  constructor(private route: Router, private _Db: ApiRestService) { }
  

  ngOnInit(): void {
    this._Db.getPark().subscribe(data => {
      this.offerts = data;
      
      
  })
}
}

