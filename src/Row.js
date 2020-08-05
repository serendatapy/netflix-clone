import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  useEffect(() => {
    //effect
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then((url) => {
        //https://www.youtube.com/watch?v=oyk0WPTQlhg
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

/*Note about useEffect: Whenever you pull in a variable from outside (fetchUrl)
  it MUST be included in the dependencies. Otherwise if the
  Url changes, objects won't be re-rendered. It IS a dendency
  because the rendering depends on it!
  Note2: inside use effect, you must define then call async
  function, can't just run async

  handleClickMovie - if there is already a trailer playing, close it
  else
  movieTrailer(movie?.name)
  look for a trailer with that movie name or nothing if null,
  this function comes from movieTrailer import
  then
  get the movie id. URLSearchParams allows us to specify what
  we want to get from the url. in this case everyhing after 'v'
  get the url id
  catch
  error

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then((url) => {
        //https://www.youtube.com/watch?v=oyk0WPTQlhg
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }
  */
