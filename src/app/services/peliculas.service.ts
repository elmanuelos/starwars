import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula, PeliculasResponse, Personaje, Planeta, Nave } from '../interfaces/peliculas-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http:HttpClient) { }

  public getPeliculas():Observable<PeliculasResponse>{
    return this.http.get<PeliculasResponse>('https://swapi.dev/api/films/');
  }

  public getPeliculaDetalle( id:string):Observable<Pelicula>{
    return this.http.get<Pelicula>( `https://swapi.dev/api/films/${id}`);
  }

  public getPersonajeDetalle( id:string):Observable<Personaje>{
    return this.http.get<Personaje>( `https://swapi.dev/api/people/${id}`);
  }
  public getPlanetaDetalle( id:string):Observable<Planeta>{
    return this.http.get<Planeta>( `https://swapi.dev/api/planets/${id}`);
  }
  public getNaveDetalle( id:string):Observable<Nave>{
    return this.http.get<Nave>( `https://swapi.dev/api/starships/${id}`);
  }

}
