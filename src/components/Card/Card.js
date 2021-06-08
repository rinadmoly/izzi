import React from 'react';
import Favorites from '../../img/icons/favorite.png'
import CardLogo from '../../img/icons/Group 1146.png'
import Image1 from '../../img/Rectangle 44.png'
import './card.css'

import { connect } from 'react-redux'

const Card=({mainImage, logo, sale, name, cardDescription, newPrice, oldPrice})=>{
    // const {mainImage, logo, sale, name, cardDescription, newPrice, oldPrice} = data
    return(
        <div className='alone_card'>
            <div className='card_img'>
                <img className='card_main_img' src={mainImage} alt='image'/>
                <img className='card_favorite_img' src={Favorites} />
                <img className='card_logo' src={logo}/>
                <div className='card_sale'>
                    <p>от {sale}%</p>
                </div>
            </div>
            <div className='card_tittle'>
                <p>{name}</p>
            </div>
            <div className='card_description'>
                <p>{cardDescription}</p>
            </div>
            <div className='card_price'>
                <p className='new_price'>{newPrice} c</p>
                <p className='old_price'>{oldPrice} c</p>
            </div>
        </div>
    )
}

const mapStateToProps = (data) =>{
    return{
        data
    }
}

export default connect(mapStateToProps)(Card);
