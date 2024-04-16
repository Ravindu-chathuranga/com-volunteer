import React from 'react'
import './Post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src='./asset/images/profile1.jpeg' alt='' className='postProfileImg' />
                        <span className='postUsername'>Ravindu Chathuranga</span>
                        <span className='postDate'>5 min ago </span>
                    </div>
                    <div className="postTopRight">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
                <div className="postCenter"></div>

                <span className="postText" style ={{fontSize : '15px'}}>This is over 1st Event!</span>
                <img src='./asset/images/event-1.jpg' alt='' className='postImg' />
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src='./asset/images/like.svg' alt='' className='likeIcon' />
                        <img src='./asset/images/heart.png' alt='' className='likeIcon' />
                        <span className='postLikeCounter'>32 people Like it</span>
                    </div>
                    <div className="postBottomRight">

                        <span className='postCommentText'> 9 Comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
