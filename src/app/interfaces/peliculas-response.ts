export interface PeliculasResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  Pelicula[];
}

export interface Pelicula{
    title:         string;
    episode_id:    number;
    opening_crawl: string;
    director:      string;
    producer:      string;
    release_date:  Date;
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       Date;
    edited:        Date;
    url:           string;
}
export interface Personaje {
    name:       string;
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    homeworld:  string;
    films:      string[];
    species:    any[];
    vehicles:   string[];
    starships:  string[];
    created:    Date;
    edited:     Date;
    url:        string;
}
export interface Planeta {
    name:            string;
    rotation_period: string;
    orbital_period:  string;
    diameter:        string;
    climate:         string;
    gravity:         string;
    terrain:         string;
    surface_water:   string;
    population:      string;
    residents:       string[];
    films:           string[];
    created:         Date;
    edited:          Date;
    url:             string;
}
export interface Nave {
    name:                   string;
    model:                  string;
    manufacturer:           string;
    cost_in_credits:        string;
    length:                 string;
    max_atmosphering_speed: string;
    crew:                   string;
    passengers:             string;
    cargo_capacity:         string;
    consumables:            string;
    hyperdrive_rating:      string;
    MGLT:                   string;
    starship_class:         string;
    pilots:                 any[];
    films:                  string[];
    created:                Date;
    edited:                 Date;
    url:                    string;
}

