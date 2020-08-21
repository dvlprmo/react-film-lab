
import {FilmRow} from "./FilmRow"
import React from "react";

export const FilmListing = ({films}) => {
    const allFilms = films.map(ele => {
        return <FilmRow films={ele} key={ele.id}/>
      });

      return(
          <div>
              {allFilms}
          </div>
      )
}
