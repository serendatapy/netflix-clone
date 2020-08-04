import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

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

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

/*Note about useEffect: Whenever you pull in a variable from outside (fetchUrl)
  it MUST be included in the dependencies. Otherwise if the
  Url changes, objects won't be re-rendered. It IS a dendency
  because the rendering depends on it!
  Note2: inside use effect, you must define then call async
  function, can't just run async*/
