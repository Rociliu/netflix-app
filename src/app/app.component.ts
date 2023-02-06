import { Component } from '@angular/core';

//importo la información de cada objeto creado en la carpeta models
import { actionFilms } from './models/actionFilms';
import { animeFilms } from './models/animeFilms';
import { comedyFilms } from './models/comedyFilms';
import { dramaFilms } from './models/dramaFilms';
import { scifiFilms } from './models/scifiFilms';
import { terrorFilms } from './models/terrorFilms';
import { top10Films } from './models/top10Films';
//importo la interfaz
import { Collection } from './models/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

//creo las variables que serán la interfaz con los valores de cada objeto, que serán llamadas desde el html
action: Collection = actionFilms;
anime: Collection = animeFilms;
comedy: Collection = comedyFilms;
drama: Collection = dramaFilms;
scifi: Collection = scifiFilms;
terror: Collection = terrorFilms;
top10: Collection = top10Films;



constructor() {
}

}
