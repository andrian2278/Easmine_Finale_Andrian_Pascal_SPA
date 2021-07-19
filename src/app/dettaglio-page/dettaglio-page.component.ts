import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../api-rest.service';
import { OFFERTS_TURING } from '../models/DATA_Api';

@Component({
  selector: 'app-dettaglio-page',
  templateUrl: './dettaglio-page.component.html',
  styleUrls: ['./dettaglio-page.component.scss']
})
export class DettaglioPageComponent implements OnInit {

  OfertsID: OFFERTS_TURING = new OFFERTS_TURING();
  constructor(private route: ActivatedRoute, private _Db: ApiRestService) { }
  id: any
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.id = id
      this._Db.getParkID(parseInt(this.id)).subscribe(data => {
        this.OfertsID = data;

      });

    });
  }
}
