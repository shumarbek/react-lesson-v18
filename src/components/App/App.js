import React from 'react'
import AppInfo from '../App-info/App-info'
import './App.css'
import SearchPanel from '../Search-panel/SearchPanel'
import AppFilter from '../App-filter/AppFilter'
import MovieList from '../movie-list/MovieList'
import AppForm from '../app-form/app-form'
const App = () => {
    const data = [
        {name: "._.", viewers: 666, favourite: true},
        {name: "vwv", viewers: 999, favourite: false},
        {name: "wvw", viewers: 888, favourite: true},
    ]
  return (
    <div className='app font-monospace'>
        <div className='content'>
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
                <div>
                    <MovieList data={data} />
                    <AppForm />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default App
// rafce
