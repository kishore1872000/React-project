import React from 'react'
import './Search.css';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import TuneIcon from '@mui/icons-material/Tune';
function Search() {
  return (
      <div className='Search'>
       <SavedSearchIcon id="icon" className="icon"/>
       <input style={{fontSize:"medium",marginTop:"5px",marginLeft:"10px"}} placeholder='Search here...'/>
        <TuneIcon className="icon1"/>
        <h4>Filter</h4>
      </div>
  )
}

export default Search