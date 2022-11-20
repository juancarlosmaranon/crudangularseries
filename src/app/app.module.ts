import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { SeriesService } from './services/series.service';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { ModificarComponent } from './components/modificar/modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SeriesComponent,
    PersonajesComponent,
    InsertarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, routing
  ],
  providers: [appRoutingProviders, SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }