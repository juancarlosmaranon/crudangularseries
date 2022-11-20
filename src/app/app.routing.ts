import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from "./components/series/series.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";
import { InsertarComponent } from "./components/insertar/insertar.component";
import { ModificarComponent } from "./components/modificar/modificar.component";

const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "detailsseries/:id", component:SeriesComponent},
    {path: "personajes/:id", component:PersonajesComponent},
    {path: "insertar", component:InsertarComponent},
    {path: "modificar", component:ModificarComponent}
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);