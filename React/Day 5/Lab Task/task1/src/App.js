import classes from "./App.module.css";
import Movies from "./components/Movies";
import AddMovie from "./components/add/AddMovie";
import UpdateMovie from "./components/update/UpdateMovie";
// import DeleteMovie from "./components/delete/DeleteMovie";
import DeleteMovie from "./components/delete/DeleteMovie";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movie, setMovie] = useState([]);
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
  const onAddMovie = (enteredTitle, enteredOveriew) => {
    setMovie((oldMovies) => {
      return [
        ...oldMovies,
        { title: enteredTitle, overview: enteredOveriew, id: Math.random() },
      ];
    });
  };
  const updateMovie = (movieId, newTitle) => {
    setMovie(
      movie.map((element) => {
        if (element.id == movieId) {
          return { ...element, element, title: newTitle };
        } else {
          return { ...element };
        }
      })
    );
  };
  const deleteMovie = (movieId) => {
    setMovie(movie.filter((element) => element.id != movieId));
  };
  return (
    <BrowserRouter>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              movie={movie}
              setMovie={setMovie}
              updateMovie={updateMovie}
            />
          }
        />
        <Route path="/add" element={<AddMovie onAddMovie={onAddMovie} />} />
        <Route
          path="/update"
          element={<UpdateMovie updateMovie={updateMovie} movie={movie} />}
        />
        <Route
          path="/delete"
          element={<DeleteMovie deleteMovie={deleteMovie} movie={movie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
