import React from 'react'

function AppForm() {
  return (
    <div className='movies-add-form'>
      <h3>Yangi kino qo'shish</h3>
      <form action="" className='add-form d-flex'>
        <input type="text" className='form-control new-post-label' placeholder='Kinoning nomi...' />
        <input type="number" className='form-control new-post-label' placeholder='Nechta ko`rilgan...' />
        <button type='submit' className='btn btn-outline-dars'>Qo'shish</button>
      </form>
    </div>
  )
}

export default AppForm
