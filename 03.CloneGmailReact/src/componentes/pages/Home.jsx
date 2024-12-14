import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { Apps, Person, Search } from '@material-ui/icons'
import SearchF from './Search'



function Home  ()  {
  return (
    <div className='home'>
        
        <div className='home__header'>
            <div className='home__headerLeft'>
                <Link to='/about'>about</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className='home__headerRight'>
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <Apps/>
            <Person />
            </div>
         </div>
         <div className='home__body'>
            <img src="https://www.google.com/logos/doodles/2024/seasonal-holidays-2024-6753651837110333.2-la202124.gif" 
            alt="" />
            <div className='home__inputContainer'>
                <SearchF/>
            </div>

         </div>
    </div>
  )
}

export default Home
