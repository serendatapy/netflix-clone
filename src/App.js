import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from './Banner';
import requests from "./requests";
import Nav from "./Nav";

function App() {
  console.log('Rendering App');
  return (
    <div className="app">
      {/* NAV */}
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow /*defaults to true*/
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
