import React from 'react'
import ButtonGroup from '../ButtonGroup'
import Card from '../Card'
import CardItemSlider from '../CardItemSlider'
import CardImg from '../../img/Group 1146.png'

import {BsHeart, BsClock} from 'react-icons/bs'
import {IoTicketOutline, IoLogoInstagram} from 'react-icons/io5'
import {FaFacebookF,FaVk} from 'react-icons/fa'
import {SiWhatsapp, SiOdnoklassniki } from 'react-icons/si'
import './CardItem.css'


const CardItem = () =>{
    return(
        <div className='container'>
            <div className='card_item'>
                <div className='card_description'>
                    <CardItemSlider />
                    <ButtonGroup />
                    <div className="btn_group_info">
                        <h4>Купон дает право скидки 50% на блюда кухни на выбор в четырех ресторанах.</h4>
                        <p>Купон действует в любой день в любое время работы ресторана.
                            Один человек может купить неограниченное количество купонов для себя или в подарок (из расчета один купон — одному человеку).
                            Если идете вдвоем или компанией, необходимо приобретать купон на каждого.
                            Для ребенка до 6 лет (включительно) купон не требуется.
                        </p>
                    </div>
                </div>
                <div className='card_info'>
                    <div className='card_info_header'>
                        <img src={CardImg} />
                        <p>Колбасофф</p>
                    </div>
                    <div className='card_info_content'>
                        <span>Купон на скидку 50%</span>
                        <p>Блюда в четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в четырех ресторанах «Чайхона № 1» со скидкой 50% Блюда в четырех ресторанах «Чайхона № 1» со скидкой 50%</p>
                    </div>
                    <div className='price_block'>
                        <p>от 150 сом</p>
                        <span>200 сом</span>
                    </div>
                    <div className='btn_buy'>
                        <button>Купить купон</button>
                        <button className='card_item_bookmark'><BsHeart/></button>
                    </div>
                    <div className='coupon_date'>
                        <p>Период действия акции:</p>
                        <span>с 29.03.2021</span> 
                        <span>по 30.03.2021</span>
                    </div>
                    <div className='quantity_coupon'>
                        <IoTicketOutline/>
                        <p>714 купонов купили</p>
                    </div>
                    <div className='dead_coupon'>
                        <BsClock/>
                        <p>Время продаж ограничено!</p>
                    </div>
                    <div className='share'>
                        <p>Поделиться</p>
                        <div className='share_links'>
                            <div className='share_link'>
                                <FaVk />
                            </div>
                            <div className='share_link'>
                                <FaFacebookF />
                            </div>
                            <div className='share_link'>
                                <SiOdnoklassniki />
                            </div>
                            <div className='share_link'>
                                <IoLogoInstagram/>
                            </div>
                            <div className='share_link'>
                                <SiWhatsapp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='like_coupon'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default CardItem

