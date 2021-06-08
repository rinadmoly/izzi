import React from 'react'
import Card from '../Card'

import './my-coupone.css'

const MyCoupon = () =>{
    return(
        <div className='my_coupon'>
            <p>Мои купоны</p>
            <div className='button_group'>
                <button className='btn'>Активные</button>
                <button className='btn'>Активированные</button>
                <button className='btn'>Истекшие</button>
            </div>
            <div className='coupon_section'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default MyCoupon;
