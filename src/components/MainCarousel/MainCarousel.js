import React from 'react'
import Slider from 'infinite-react-carousel';
import Image2 from '../../img/Rectangle 22.png'

const MainCarousel = () =>{
    const settings =  {
        arrows: false
      };
    return(
        <Slider { ...settings} dots index>
            <div className='banner'>
                <img src={Image2}/>
            </div>
            <div className='banner'>
                <img src={Image2}/>
            </div>
            <div className='banner'>
                <img src={Image2}/>
            </div>
            <div className='banner'>
                <img src={Image2}/>
            </div>
            <div className='banner'>
                <img src={Image2}/>
            </div>
            
        </Slider>
    )
}

export default MainCarousel
