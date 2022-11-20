import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Personaje } from "../model/personaje";

@Injectable()
export class SeriesService{

    constructor(private _http: HttpClient){}

    deletePersonaje(idpersonaje:number): Observable<any>{
        var request = "/api/Personajes/"+idpersonaje;
        var url = environment.urlApiSeries + request;
        return this._http.delete(url);
    }

    putPersonaje(personaje:Personaje, idpersonaje:number, idserie:number):Observable<any>{

        //CONVERTIMOS NUESTRO OBJETO MODEL A JSON
        var json = JSON.stringify(personaje);   
        //DEBEMOS INDICAR EL TIPO DE OBJETO A ENVIAR EN LA PETICION
        //EN EL header
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = 'api/Personajes/'+idpersonaje+"/"+idserie;
        var url = environment.urlApiSeries + request;
        return this._http.put(url,json,{headers:header});
    }

    postPersonaje(personaje:Personaje): Observable<any>{

        //CONVERTIMOS NUESTRO OBJETO MODEL A JSON
        var json = JSON.stringify(personaje);   
        //DEBEMOS INDICAR EL TIPO DE OBJETO A ENVIAR EN LA PETICION
        //EN EL header
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = 'api/Personajes';
        var url = environment.urlApiSeries + request;
        return this._http.post(url,json,{headers:header});
    }

    getPersonajes(id:string): Observable<any>{
        var request = 'api/Series/PersonajesSerie/'+id;
        var url = environment.urlApiSeries + request;
        return this._http.get(url); 
    }

    getPersona(): Observable<any>{
        var request = 'api/personajes';
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