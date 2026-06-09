import React from 'react'
import './MovieList.css'
import MovieListItems from '../movie-list-items/MovieListItems'
const MovieList = ({data}) => {
  return (
    <div className='movie-list'>
      {data.map(item => {
        <MovieListItems name={item.name} viewers={item.viewers} favourite={item.favourite}/>
      })}
    </div>
  )
}

export default MovieList
