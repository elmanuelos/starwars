import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PeliculasResponse, Pelicula, Personaje, Planeta } from '../../interfaces/peliculas-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula: Pelicula | undefined;

  public personaje: string[] = []; //arreglo de string para guardar personaje name
  public planeta: string[] = []; //arreglo de string para guardar planeta name
  public nave: string[] = []; //arreglo de string para guardar nave name

  constructor( private activatedRoute:ActivatedRoute,private peliculasService:PeliculasService,
                private location:Location) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id']; //obtener parametro id de la ruta

    console.log(id);

    let regex = /(\d+)/g; //exprsion regular de numeros



    this.peliculasService.getPeliculaDetalle(id).subscribe(pelicula=>{
      console.log(pelicula);
      this.pelicula = pelicula;

      //sacar el nombre del personaje a partir de la url obtenida
      for (let j = 0; j < this.pelicula.characters.length; j++) {
        const element = String(this.pelicula.characters[j].match(regex)); //obtiene numero del String, se obtiene un tipo num y se convierte a String
        console.log(element);
        this.peliculasService.getPersonajeDetalle(element).subscribe(personaje=>{
          console.log(personaje.name);
          this.personaje[j] = personaje.name;
        })
      }
       //sacar el nombre del planeta partir de la url obtenida
       for (let k = 0; k < this.pelicula.planets.length; k++) {
        const element = String(this.pelicula.planets[k].match(regex)); //obtiene numero del String, se obtiene un tipo num y se convierte a String
        console.log(element);
        this.peliculasService.getPlanetaDetalle(element).subscribe(planeta=>{
          console.log(planeta.name);
          this.planeta[k] = planeta.name;
        })
      }
       //sacar el nombre de nave partir de la url obtenida
       for (let l = 0; l < this.pelicula.starships.length; l++) {
        const element = String(this.pelicula.starships[l].match(regex)); //obtiene numero del String, se obtiene un tipo num y se convierte a String
        console.log(element);
        this.peliculasService.getNaveDetalle(element).subscribe(nave=>{
          console.log(nave.name);
          this.nave[l] = nave.name;
        })
      }

    })
  }

  clickBack(){
      this.location.back();
  }

}
