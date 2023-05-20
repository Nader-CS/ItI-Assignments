import { useState, useEffect } from "react";
import Movie from "./Movie";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  // const [moviesList] = useState([
  //   {
  //     id: 1,
  //     name: "The Lord Of The Rings",
  //     about:
  //       "The Lord of the Rings is a series of three epic fantasy adventure films directed by Peter Jackson, based on the novel The Lord of the Rings by J. R. R. Tolkien.",
  //     path: "./images/1.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "The Hobbit",
  //     about:
  //       "The Hobbit is a series of three epic high fantasy adventure films directed by Peter Jackson.",
  //     path: "./images/2.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Finding Nemo",
  //     about:
  //       "Finding Nemo is a 2003 American computer-animated comedy-drama adventure film[2] produced by Pixar Animation Studios for Walt Disney Pictures.",
  //     path: "./images/3.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Cult of Chucky",
  //     about:
  //       "Cult of Chucky is a 2017 American supernatural slasher film written and directed by Don Mancini.",
  //     path: "./images/4.jpg",
  //   },
  // ]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovie(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      {movie.map((mov) => (
        <Movie movie={mov} key={mov.id}></Movie>
      ))}
    </div>
  );
};

export default Movies;
