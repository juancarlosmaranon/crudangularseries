import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild("cajaid") cajaid!: ElementRef;
  @ViewChild("cajanombre") cajanombre!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajaidserie") cajaidserie!: ElementRef;


  constructor(
    private _service: SeriesService,
    private _router: Router
  ) { }

  loadSeries():void {
    this._service.getSeries().subscribe(response=>{
      this.series = response;
    })
  }

  insertarPersonaje():void{
    var id = parseInt(this.cajaid.nativeElement.value);
    var nom = this.cajanombre.nativeElement.value;
    var img = this.cajaimagen.nativeElement.value;
    var idSerie = parseInt(this.cajaidserie.nativeElement.value);
    console.log(this.cajaidserie.nativeElement.value);
    var newPers = new Personaje (id,nom,img,idSerie);
    this._service.postPersonaje(newPers).subscribe(response=>{
      this._router.navigate(["/detailsseries",idSerie]);
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.loadSeries();
  }

}
