import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

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
  };

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
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          //https://www.youtube.com/watch?v=oyk0WPTQlhg
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log("HANDLE ERROR GRACEFULLY", error);
          setTrailerUrl("VV9BZC7-Ss8");
        });
    }
  };

  const experimentFunc = (isLargeRow) => {
    let jsxArrOfMovies = movies.map((movie) => (
      <img
        key={movie.id}
        onClick={() => handleClick(movie)}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    ));
    console.log('JSX ARRAY OF MOVIES:',jsxArrOfMovies);
    return jsxArrOfMovies;
  };

  /*
  Note: using () instead of {} in an arrow function, allow you
  to ommit the return keyword, as the element is returned automatically
  However, note that in the case of automatic return () it can
  only return 1 element, thus if you need several lines
  it's better to use {}
  Also to note: If you return a [] with within multiple lines
  of JSX (as the movies) it will all render as a single element,
  much like using a fragment!
  experimentFunction = this function needs to check if images
  are actually loading or returning a 404, if returning a
  404, then it either doesn't load the element at all
  or it returns a default placeholder (UX problem?)
  */

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {experimentFunc(isLargeRow)}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
