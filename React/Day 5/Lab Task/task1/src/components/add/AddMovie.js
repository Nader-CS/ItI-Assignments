import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddMovie.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddMovie = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredOveriew, setEnteredOveriew] = useState("");
  const [error, setError] = useState();
  const [done, setDone] = useState(false);
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredTitle.trim().length === 0 ||
      enteredOveriew.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid movie title and overview",
      });
      return;
    }
    props.onAddMovie(enteredTitle, enteredOveriew);
    setDone(true);
    setEnteredTitle("");
    setEnteredOveriew("");
  };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const overviewChangeHandler = (event) => {
    setEnteredOveriew(event.target.value);
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
        <form onSubmit={addUserHandler}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <label htmlFor="overview">Overview</label>
          <input
            id="overview"
            type="text"
            value={enteredOveriew}
            onChange={overviewChangeHandler}
          />
          <Button type="submit">Add Movie</Button>
          {done && (
            <p
              style={{ textAlign: "center", color: "red", fontWeight: "bold" }}
            >
              Added Successfully
            </p>
          )}
        </form>
      </Card>
    </div>
  );
};

export default AddMovie;
