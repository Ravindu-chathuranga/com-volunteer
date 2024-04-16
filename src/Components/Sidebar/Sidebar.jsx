import React from 'react'
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faMessage, faCirclePlay, faUserGroup, faCalendarCheck, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faRss} />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faMessage} />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faCirclePlay} />
            <span className='sidebarListItemText'>Video</span>
          </li>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faUserGroup} />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faCalendarCheck} />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <FontAwesomeIcon className='sidebarIcon' icon={faGraduationCap} />
            <span className='sidebarListItemText'>Education</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>

        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile2.jpg' alt='' />
            <span className='sidebarFriendName'> Ashan Sajeewa</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src='./asset/images/profile3.jpg' alt='' />
            <span className='sidebarFriendName'> Pramod Lakshan</span>
          </li>
         

        </ul>
      </div>
    </div>

  )
}
