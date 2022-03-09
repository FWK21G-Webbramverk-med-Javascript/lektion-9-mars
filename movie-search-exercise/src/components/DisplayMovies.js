import MovieCard from "./MovieCard";
import './DisplayMovies.css';

function DisplayMovies(props) {
    const { movies } = props;

    const movieComponents = movies.map((movie) => {
        return <MovieCard movie={ movie } key={ movie.imdbID } />
    });

    return (
        <section className="display-movies">
            { movieComponents.length > 0 ? movieComponents : <p>Sök på en filmtitel i inputfältet ovan.</p> }
        </section>
    )
}

export default DisplayMovies;