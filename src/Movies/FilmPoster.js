import React from 'react'

export const FilmPoster = ({films}) => {
      const poster_url = `https://image.tmdb.org/t/p/w780/${films.poster_path}`
      return(
          <div>
              <img src={poster_url} />
          </div>
      )
}

