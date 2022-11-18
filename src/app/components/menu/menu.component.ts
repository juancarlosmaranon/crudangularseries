import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/model/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series!:Array<Serie>;

  constructor(
    private _service: SeriesService
  ) { }

  loadSeries():void {
    this._service.getSeries().subscribe(response=>{
      this.series = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.loadSeries();
  }
}
