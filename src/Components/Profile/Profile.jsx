import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle, faUser, faBell, faMessage } from '@fortawesome/free-solid-svg-icons'
import './Profile.scss';


export default function Profile() {
    return (
        <div className='topbarContainer'>

            <div className="topbarLeft">
                <h1 className='logo'>VOLUNTEER <FontAwesomeIcon icon={faHandshakeAngle} /></h1>
            </div>
            <div className="topbarCenter">

            </div>


            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <div className="icon"><FontAwesomeIcon icon={faUser} />
                            <span className="topbarIconBadge"> 1</span>
                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="icon"><FontAwesomeIcon icon={faMessage} />
                            <span className="topbarIconBadge"> 2 </span>

                        </div>
                    </div>
                    <div className="topbarIconItem">
                        <div className="icon"><FontAwesomeIcon icon={faBell} />
                            <span className="topbarIconBadge"> 4</span>
                        </div>
                    </div>
                </div>
                <img src="/asset/images/profile1.jpeg" alt="" className="topbarImg" />
            </div>


        </div>
    )
}
