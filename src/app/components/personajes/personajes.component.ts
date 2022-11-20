import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/model/personaje';
import { SeriesService } from 'src/app/services/series.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes!:Array<Personaje>;
  public id!: number;

  constructor(
    private _service: SeriesService,
    private _activeRoutes:ActivatedRoute
  ) { }

  borrarPersonajes(id:number):void{
    this._service.deletePersonaje(id).subscribe(response=>{
      this.loadPersonajes(id);
    })
  }

  loadPersonajes(id:number):void{
    this._service.getPersonajes(id.toString()).subscribe(response=>{
      this.personajes = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params:Params)=>{
      if(params['id'] !=null){
        this.id = parseInt(params['id']);
        this.loadPersonajes(this.id);
      }
    })
  }

}
