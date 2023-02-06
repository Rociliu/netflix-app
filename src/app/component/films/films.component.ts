import { Collection } from './../../models/interfaces'; //importo la interfaz 'Colection' para meterla en el input
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent {


//poniendo la variable filmsColections, no tengo que hacer un input por cada género de películas (terrorFilm, dramaFilm....)
//declaro el input con la variable filmsColections, así evito poner any, y le digo que será la interfaz Collection. Para que no me de errores le doy las propiedades del objeto

@Input() filmsCollections: Collection = { section: '', films: []};

constructor(){
}

}

