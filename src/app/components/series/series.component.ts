import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/model/series';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public serie!:Serie;

  constructor(
    private _service: SeriesService,
    private _activeRoutes:ActivatedRoute
  ) { }

  loadSerie(id:number):void {
    this._service.laserie(id.toString()).subscribe(response=>{
      this.serie = response;
    })
  }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params:Params)=>{
      if(params['id'] !=null){
        var id = parseInt(params['id']);
        this.loadSerie(id);
      }
    })
  }

}
