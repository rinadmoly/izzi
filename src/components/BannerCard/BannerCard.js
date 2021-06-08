import React from 'react';
import BannerCardImg from '../../img/Rectangle 22 (1).png'
import './bannerCard.css';

const BannerCard = () =>{
    return(
        <div className='banner_card'>
            <img src={BannerCardImg} />
        </div>
    )
}
export default BannerCard