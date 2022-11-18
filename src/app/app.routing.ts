import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from "./components/series/series.component";
import { PersonajesComponent } from "./components/personajes/personajes.component";

const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "detailsseries/:id", component:SeriesComponent},
    {path: "personajes/:id", component:PersonajesComponent}
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);