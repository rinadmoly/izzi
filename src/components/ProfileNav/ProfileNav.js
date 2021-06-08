import React from 'react';
import {IoTicketSharp} from 'react-icons/io5'
import {BiLock} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {RiPhoneFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'

import './profilenav.css'

const ProfileNav =()=>{
    return(
        <div className='profile_nav'>
            <nav>
                <li className='profile_nav_link'>
                    <p><Link to='/ggg' ><span><BsFillPersonFill /></span> Профиль</Link></p>
                </li>
                <li className='profile_nav_link'>
                    <p><Link to='/partner'><span><AiFillStar /></span> Стать партнером</Link></p>
                </li>
                <li className='profile_nav_link'>
                    <p><Link to='/partner/my-coupon'><span><IoTicketSharp /></span> Мои купоны</Link></p>
                </li>
                <li className='profile_nav_link'>
                    <p><Link to='/partner/change-number'><span><RiPhoneFill /></span> Сменить номер</Link></p>
                </li>
                <li className='profile_nav_link'>
                    <p><Link to='jjj'><span><BiLock /></span> Сменить пароль</Link></p>
                </li>
                <p className="logOut">Выйти из аккаунта</p>
            </nav>
        </div>
    )
}

export default ProfileNav
