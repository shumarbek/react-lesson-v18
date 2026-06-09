import React from 'react'
import AppInfo from '../App-info/App-info'
import './App.css'
import SearchPanel from '../Search-panel/SearchPanel'
import AppFilter from '../App-filter/AppFilter'
import MovieList from '../movie-list/MovieList'
import AppForm from '../app-form/app-form'
const App = () => {
  return (
    <div className='app font-monospace'>
        <div className='content'>
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
                <div>
                    <MovieList/>
                    <AppForm />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default App
// rafce
