import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Personaje } from "../model/personaje";

@Injectable()
export class SeriesService{

    constructor(private _http: HttpClient){}

    postPersonaje(personaje:Personaje): Observable<any>{
        var request = '/api/Personajes';
        var url = environment.urlApiSeries + request;
        return this._http.post(url,personaje);
    }

    getPersonajes(id:string): Observable<any>{
        var request = 'api/Series/PersonajesSerie/'+id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url); 
    }

    laserie(id:string): Observable<any>{
        var request = '/api/Series/'+id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }

    getSeries(): Observable<any>{
        var request = '/api/Series';
        var url = environment.urlApiSeries + request;
        return this._http.get(url);
    }

    



}