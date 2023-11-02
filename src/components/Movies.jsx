import React from "react";
import '/src/App.css'

export default function Movies({ moviesData }) {
  return (
    <div className='movies-container'>
      {moviesData.map((movie) => (
        <div key={movie.id} className='movie-container'>
          <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className='image'/>
          <h4>{movie.original_title}</h4>
          <p className='overview'>{movie.overview}</p>
          <h5>Ratings :{movie.vote_average}</h5>
          <button>See More</button>
          
        </div>
      ))}
    </div>
  );
}
