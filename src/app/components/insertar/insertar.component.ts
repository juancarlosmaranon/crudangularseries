import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Personaje } from 'src/app/model/personaje';
import { Serie } from 'src/app/model/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {

  public personaje!:Personaje;
  public series!:Array<Serie>;

  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;


  constructor(
    private _service: SeriesService
  ) { }

  loadSeries():void {
    this._service.getSeries().subscribe(response=>{
      this.series = response;
      console.log(response);
    })
  }

  insertarPersonaje():void{
    var nom = this.cajanombre.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    
    var newPers = new Personaje(nom,img);
  }

  ngOnInit(): void {
  }

}
