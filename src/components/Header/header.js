import React, { Component } from 'react';
import './header.css';
import SearchPhoto from '../../img/icons/search.png';
import Favorite from '../../img/icons/Vector.png';
import TicketPhoto from '../../img/icons/ticket.png';
import LogInPhoto from '../../img/icons/log-in.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Head />
            </header>
        )
    }
}

const Head = () =>{
    return(

        <div className='container'>
            <div className='info_header_panel'>
                <nav>
                    <ul>
                        <li><Link to="#">О нас</Link></li>
                        <li><Link to="#">Помощь</Link></li>
                        <li><Link to="#">Товары</Link></li>
                        <li><Link to="#">Контакты</Link></li>
                    </ul>
                </nav>
                <div className="left_info_header">
                    <div className='info_header_tel'>
                        <p>Тел. для справки: <a href='#'>+996 000 00 00 00</a></p>
                    </div>
                    <div className='info_header_button'>
                        <i className="left_line"></i>
                        <Link to='/partner'>Стать партнером</Link>
                    </div>
                </div>
            </div>
            <div className='main_header_panel'>
                <div className='main_header_logo'><Link to='/'>IZZZI</Link></div>
                <div className='main_header_search'>
                    <form>
                        <input type="text" placeholder="Поиск"/>
                        <button type="submit"><img src={SearchPhoto}/></button>
                    </form>
                </div>
                <div className='logIn'>
                    <div className='favorites'>
                        <img src={Favorite}/><p>Избранное</p>
                    </div>
                    <div className='ticket'>
                        <img src={TicketPhoto}/><p>Мои купоны</p>
                    </div>
                    <div className='signIn'>
                        <img src={LogInPhoto}/><p><Link to='/login'>Войти</Link></p>
                    </div>
                </div>
            </div>
            <div className='category_header_panel'>
                <nav>
                    <ul>
                        <li><a href='#'>ВСЕ</a></li>
                        <li><a href='#'>УСЛУГИ</a></li>
                        <li><a href='#'>ЕДА</a></li>
                        <li><a href='#'>ЗДОРОВЬЕ</a></li>
                        <li><a href='#'>КРАСОТА</a></li>
                        <li><a href='#'>КРАСОТА</a></li>
                        <li><a href='#'>СПОРТ</a></li>
                        <li><a href='#'>ТУРИЗМ/ОТЕЛИ</a></li>
                        <li><a href='#'>НОВЫЕ</a></li>
                        <li><a href='#'>ТОВАРЫ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
