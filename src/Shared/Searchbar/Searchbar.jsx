import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Searchbar.scss'

export default function Searchbar() {
  return (
    <div className='input-wrapper'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input placeholder='Search'/>
        </div>
  )
}
