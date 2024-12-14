import React, {useState, } from 'react'
import './Search.css'
import { Search, Mic, } from '@material-ui/icons'
//import { Button } from '@mui/material'


function SearchF () {
    const[input, setInput] = useState('');

    const search = (e) =>{
        e.preventDefault();

    console.log('You hit the search button >>', input)
    };
 {/* Se agrega el buscador y las leyendas de abajo */}
  return (
    <form className='search'>
        <div className='search__input'>
            <Search className= 'search__inputIcon' />
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <Mic/>
        </div>

        <div className='search__buttons'>
            <button type='submit' onClick={search} 
            variant='outlined'> 
                Google Search  
            </button>
            <button variant='outlined'> I`am feeling Luky </button>

        </div>
      
    </form>
  )
}

export default SearchF
