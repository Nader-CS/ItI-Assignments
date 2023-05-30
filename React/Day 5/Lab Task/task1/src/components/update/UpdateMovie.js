import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./UpdateMovie.module.css";
import ErrorModal from "../UI/ErrorModal";
const UpdateMovie = (props) => {
  const [oldTitle, setOldTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  const updateHandler = (event) => {
    event.preventDefault();
    if (oldTitle.trim().length === 0 || newTitle.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid movie title",
      });
      return;
    }
    const movie = props.movie.find((movie) => movie.title == oldTitle);
    if (!movie) {
      setError({
        title: "Invalid input",
        message: "Movie not found!!!",
      });
      return;
    }
    props.updateMovie(movie.id, newTitle);
    setDone(true);
    setOldTitle("");
    setNewTitle("");
  };
  const oldTitleChangeHandler = (event) => {
    setOldTitle(event.target.value);
  };
  const newTitleChangeHandler = (event) => {
    setNewTitle(event.target.value);
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
          <label htmlFor="oldTitle">Old Title</label>
          <input
            id="oldTitle"
            type="text"
            value={oldTitle}
            onChange={oldTitleChangeHandler}
          />
          <label htmlFor="newTitle">New Title</label>
          <input
            id="newTitle"
            type="text"
            value={newTitle}
            onChange={newTitleChangeHandler}
          />
          <Button type="submit">Update Movie</Button>
          {done && (
            <p
              style={{ textAlign: "center", color: "red", fontWeight: "bold" }}
            >
              updated Successfully
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default UpdateMovie;
