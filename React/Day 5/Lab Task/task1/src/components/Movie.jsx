import "./Movie.css";
import Actions from "./Actions";
const Movie = (props) => {
  return (
    <div className="card movie-container">
      <img className="card-img-top" src="images/3.jpg" alt="movie-img" />
      <div className="card-body">
        <h5 className="card-title">{props.movie.title}</h5>
        <p className="card-text movie-text">{props.movie.overview}</p>
        <Actions
          id={props.movie.id}
          deleteMovie={props.deleteMovie}
          updateMovie={props.updateMovie}
        ></Actions>
      </div>
    </div>
  );
};
export default Movie;
