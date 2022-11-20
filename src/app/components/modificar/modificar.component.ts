import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/model/personaje';
import { Serie } from 'src/app/model/series';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;
  public serie!: Serie;
  public personaje!: Personaje;

  @ViewChild("cajaidserie") cajaidserie!: ElementRef;
  @ViewChild("cajaidpersonaje") cajaidpersonaje!: ElementRef;

  constructor(
    private _service: SeriesService,
    private _router: Router
  ) { }

  loadSeries():void {
    this._service.getSeries().subscribe(response=>{
      this.series = response;
    })
  }

  loadPersonajes():void {
    this._service.getPersona().subscribe(response=>{
      this.personajes = response;
    })
  }

  modificarPersonaje():void{
    var idSerie = parseInt(this.cajaidserie.nativeElement.value);
    var idPersonaje = parseInt(this.cajaidpersonaje.nativeElement.value);

    this._service.putPersonaje(this.personaje,idPersonaje,idSerie).subscribe(response=>{
      this._router.navigate(["/"]);
    })
  }

  ngOnInit(): void {
    this.loadSeries();
    this.loadPersonajes();
  }

}
