import React from "react";


import TMDB from '../TMDB'
import { FilmPoster } from "./FilmPoster";

export const FilmRow = ({films}) => {

    return (
        <div className="film-row">
            <FilmPoster films={films} />
         <div className="film-summary">
        <h1>{films.title}</h1>
        <p>{(new Date(films.release_date).getFullYear())}</p>
    </div>
    </div>

    )
    
    }
