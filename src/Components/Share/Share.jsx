import React from 'react'
import './Share.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhotoFilm,faTag,faLocationPin,faFaceLaugh} from '@fortawesome/free-solid-svg-icons';

export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/asset/images/profile1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder="What's in your mind Ravindu?" className='shareInput'></input>
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">

                    <div className="shareOptions">
                        <div className="shareOption">
                        <FontAwesomeIcon className="shareIcon" icon={faPhotoFilm} style={{color: 'tomato'}}/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                        <FontAwesomeIcon className="shareIcon"icon={faTag} style={{color: 'blue'}}/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                        <FontAwesomeIcon className="shareIcon"icon={faLocationPin} style={{color: 'green'}}/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                        <FontAwesomeIcon className="shareIcon"icon={faFaceLaugh} style={{color: 'goldenrod'}}/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>


            </div>
        </div>
    )
}
