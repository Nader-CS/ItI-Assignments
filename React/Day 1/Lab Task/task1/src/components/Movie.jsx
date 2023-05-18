import "./Movie.css";
const Movie = (props) => {
  return (
    <div className="card movie-container">
      <img
        className="card-img-top"
        src={props.movie.path}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.movie.name}</h5>
        <p className="card-text">{props.movie.about}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default Movie;
