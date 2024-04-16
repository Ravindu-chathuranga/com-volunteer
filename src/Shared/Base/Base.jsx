import React from 'react'
import Navigation from '../Navigationbar/Navigation'
import MyCarousel from '../MyCarousel/MyCarousel'

export default function Base(props) {
    return (
        <>
            <Navigation/>
            <MyCarousel/>
            <div>
                {props.children}
            </div>
        </>
    )
}
