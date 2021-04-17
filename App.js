import React from 'react';
import Movie from './Components/Movies'
import { useEffect, useState } from 'react';

const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=015688f9992f366aa941159dbe00907a&language=en-US&page=1"
const  SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=015688f9992f366aa941159dbe00907a&language=en-US&page=1&query='

function App() { 

  let [ movies, setMovies] = useState([]);
  let [ searchTerm,setsearchTerm ] = useState('')
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    fetch(FEATURED_API)
    .then((resp) => resp.json())
    .then((data) =>{
      console.log(data);
      setMovies(data.results);
    })
  } , [])

  function handleOnSubmit (e) {
    e.preventDefault();

    let myInput  = e.target.value

    if (searchTerm) {

      fetch(SEARCH_API+searchTerm)
      .then((resp) => resp.json())
      .then((data) =>{
        data.results.length >= 1 ? setMovies(data.results) : alert("I'm affraid there were no such movies \nfound  Mr.Bian. Kindly try again...")
      })

      setsearchTerm('');
  }

  }

  function handleOnChange (e) {
    setsearchTerm(e.target.value);
  }

  return (
    <>
    <h2 className='logo'><a href='http://localhost:3000/'>Brian Gitau</a></h2>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input
        className='search-bar'
        type='text'
        placeholder="Search ..."
        value = {searchTerm}
        onChange={handleOnChange} />
      </form>
    </header>
    <div className='movie-container'>
      {movies.length > 0 && movies.map((movie) => (
        <Movie key ={movie.id} {...movie} />
      ))}
    </div>
    </>
  ) ;
}

export default App;