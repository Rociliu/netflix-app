//Creo la interfaz para la colección de películas
export interface Collection {
    section: string;
    films: Film[];
}
//creo una interfaz para el array Film
export interface Film {
    title: string;
    image: string;
}

