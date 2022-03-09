import './MovieCard.css';

function MovieCard(props) {
    const { movie } = props;

    return (
        <article className='movie-card'>
            <img src={ movie.Poster } />
            <section className='movie-card__information'>
                <p>Titel: { movie.Title }</p>
                <p>År: { movie.Year }</p>
                <p>iMDB id: { movie.imdbID }</p>
            </section>
        </article>
    )
}

export default MovieCard;