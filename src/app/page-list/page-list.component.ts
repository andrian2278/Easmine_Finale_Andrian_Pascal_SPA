import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from '../api-rest.service';
import { ParkList } from '../models/Parkitems';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
   park:ParkList[]=[]
  constructor(private route: Router, private _Db: ApiRestService) { }
  
  

  ngOnInit(): void {
    this._Db.getPark().subscribe(z => {
      this.park = z;
  })
}
}
