import styles from './Movies.module.css';
import Movie from '../Movie/Movie.jsx';

function Movies(props) {
  // const movies = data;

  // const [movies, setMovies] = useState(data);
  const { movies, setMovies } = props;
  function handleClick() {
    const movie = {
      id: "xyz",title: "jigsaw spiral",
      year: "2021",type: "Movie",
      poster:"https://picsum.photos/300/400",
    };
    // movies.push(movie);
    setMovies([...movies, movie]);
  }

  return (
    <div>
      <div className={styles.container}>
      <section className={styles.movies}>
        <h2>Lates Movies</h2>
        <div className={styles.movies__container}>
          {/* <Movie title="superman No Home" year="2022" /> */}

          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
          
        </div>

        <button onClick={handleClick}>Add Movie</button>

      </section>
    </div>
    </div>
    
  );
}


export default Movies;