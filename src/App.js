import { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from "./MovieCard";
const API_URL = `http://www.omdbapi.com/?apikey=147c2355`;
const movie1 = {
  "Title": "Superman, Spiderman or Batman",
  "Year": "2011",
  "imdbID": "tt2084949",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    searchMovies('Spiderman');

  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }



  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input placeholder="Search for movies" value="" onChange={() => { }} />

        <img src={SearchIcon} alt="Search" />
      </div>
      {
        movies?.length > 0 ? (
          <div className="container">

            {movies.map((movie)=>{
              <MovieCard key={movie.imdbID} movie={movie} />
            })}

          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )

      }

    </div>
  )
}

export default App;
