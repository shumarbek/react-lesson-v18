import React from 'react'
import './MovieListItems.css'
const MovieListItems = () => {
  return (
    <div>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <span className='list-group-item-label'>Empire of Osman</span>
        <input type='number' className='list-group-item-input' defaultValue="900"/>
        <div className='d-flex justify-content-center align-items-center'>
            <button className='btn-cookie btn-sm' type='button'>
            <i className='fas fa-cookie'></i>
            </button>
             <button className='btn-trash btn-sm' type='button'>
            <i className='fas fa-trash'></i>
            </button>
            <i className='fas fa star'></i>
        </div>
        
      </li>
    </div>
  )
}

export default MovieListItems
