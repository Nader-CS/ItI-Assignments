import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./DeleteMovie.module.css";
import ErrorModal from "../UI/ErrorModal";
const DeleteMovie = (props) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  const updateHandler = (event) => {
    event.preventDefault();
    if (title.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid movie title",
      });
      return;
    }
    const movie = props.movie.find((movie) => movie.title == title);
    if (!movie) {
      setError({
        title: "Invalid input",
        message: "Movie not found!!!",
      });
      return;
    }
    props.deleteMovie(movie.id);
    setDone(true);
    setTitle("");
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
    setDone(false);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={updateHandler}>
          <label htmlFor="title">Movie Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
          />

          <Button type="submit">Deleted Movie</Button>
          {done && (
            <p
              style={{ textAlign: "center", color: "red", fontWeight: "bold" }}
            >
              Deleted Successfully
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default DeleteMovie;
