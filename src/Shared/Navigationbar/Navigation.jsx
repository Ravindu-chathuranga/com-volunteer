import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandshakeAngle} from '@fortawesome/free-solid-svg-icons'
import './Navigation.scss'
import Searchbar from '../Searchbar/Searchbar'


export default function Navigation() {
  return (
    <nav className='navbar'>
        <h1 className='logo'>VOLUNTEER <FontAwesomeIcon icon={faHandshakeAngle} /></h1>
        <Searchbar/>
        <ul className='nav-link'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About us</Link>
            <Link to='/service'>Services</Link>
            <Link to='/contact'>Contact us</Link>
            <button className='btn'>Sign up</button>
            
        </ul>
    </nav>
  )
}
