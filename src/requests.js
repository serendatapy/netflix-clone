//TMDB
const API_KEY = "0363320139efb2eb26f6552c4b174da6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

/*
Useful Links
https://developers.themoviedb.org/3/discover/tv-discover
https://www.themoviedb.org/documentation/api/discover
*/
