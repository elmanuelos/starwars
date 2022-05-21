import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/peliculas-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas: Pelicula[] = [];

  constructor(private peliculasService:PeliculasService, private router: Router) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe( (resp) => {

      console.log(resp.results);
      this.peliculas = resp.results;


     });

  }

  onPeliculaClick( pelicula: Pelicula ){
    //console.log(pelicula);
    let regex = /(\d+)/g;
// \d indica que quieres que coja números;
// /g indica que quieres buscar de manera global en todo el string.
    let pelicula_url=pelicula.url;

    let pelicula_URL= (pelicula_url.match(regex)); //se hace match para encontrar numero


    this.router.navigate(['/pelicula', String(pelicula_URL)])
  }



  }


