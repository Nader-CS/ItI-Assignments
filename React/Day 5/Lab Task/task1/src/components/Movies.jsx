import { useState, useEffect } from "react";
import Movie from "./Movie";
const Movies = (props) => {
  const deleteMovie = (movieId) => {
    props.setMovie(props.movie.filter((element) => element.id != movieId));
    console.log("i'm working");
    console.log(props.movie.filter((element) => element != movieId));
  };

  return (
    <div>
      {props.movie.map((mov) => (
        <Movie
          movie={mov}
          key={mov.id}
          deleteMovie={deleteMovie}
          updateMovie={props.updateMovie}
        ></Movie>
      ))}
    </div>
  );
};

export default Movies;
