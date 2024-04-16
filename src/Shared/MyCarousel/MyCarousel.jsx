import React from 'react'
import style from'./MyCarousel.module.scss'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classNames from 'classnames';

const imgList = ['/asset/images/slide/slide1.jpeg','/asset/images/slide/slide2.jpeg','/asset/images/slide/slide3.jpeg','/asset/images/slide/slide4.jpeg']
export default function MyCarousel() {
    return (
        <Carousel autoPlay infiniteLoop interval={5000} showStatus={false} showThumbs={false} dynamicHeight={false} showArrows={false}>
            {
                imgList.map((url, index) => {
                    return <div key={"slide-" + index} className={classNames(style.sliderImg)} style={{ backgroundImage: `url('${url}')` }}>
                      
                    </div>
                })
            }
        </Carousel>
    )
}
