import React, { Component } from 'react'
import "./App.css"

import TMDB from "./TMDB"
import {FilmListing} from './Movies/FilmListing'
import {FilmDetails} from './Movies/FilmDetails'


let name = "Mohammad"
class App extends Component {
  render() {
     let objNames = {
       name: "Mohammad",
       hobbies: ["chiling", "hiding from Corona"],
       style : "no style"
     };

     /* line 17 is same as obNames.hobbies */
     const {hobbies} = objNames;
    
    return (


      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing films={TMDB.films} />
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
          <FilmDetails films={TMDB.films}/>
        </div>
      </div>

     
    )
  }
}

export default App;