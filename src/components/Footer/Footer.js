import React, { Component } from 'react'
import FB from '../../img/icons/FB.svg'
import OK from '../../img/icons/OK.svg'
import VK from '../../img/icons/VK.svg'
import Igram from '../../img/icons/IGRAM.svg'
import Tel from '../../img/icons/Tel.svg'
import Mail from '../../img/icons/Mail.svg'
import AppStore from '../../img/icons/AppStore.svg'
import GooglePlay from '../../img/icons/GooglePlay.svg'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Foot />
            </div>
        )
    }
}

const Foot = () =>{
    return(
        <section id='footer'>
            <div className='container'>
                <div className='footer_nav'>
                    <div className='link'>
                        <p>Покупателям</p>
                        <a href='#'>Как сделать заказ</a>
                        <a href='#'>Способы оплаты</a>
                        <a href='#'>Доставка</a>
                        <a href='#'>Возврат товара</a>
                        <a href='#'>Вопросы и ответы</a>
                    </div>
                    <div className='about'>
                        <p>Компания</p>
                        <a href='#'>О нас</a>
                        <a href='#'>Контакты</a>
                    </div>
                    <div className='network'>
                        <p>Мы в соц сетях</p>
                        <a href='#'><img src={VK} /><span>Вконтакте</span></a>
                        <a href='#'><img src={FB} /><span>Facebook</span></a>
                        <a href='#'><img src={OK} /><span>Одноклассники</span></a>
                        <a href='#'><img src={Igram} /><span>Instagram</span></a>
                    </div>
                    <div className='contact'>
                        <p>Свяжитесь с нами</p>
                        <a href='#'><img src={Mail} /><span>mail@mix.kg</span></a>
                        <a href='#'><img src={Tel} /><span>+996 555 55 55 55</span></a>
                        <div className='app_link'>
                            <a><img src={AppStore} /></a>
                            <a><img src={GooglePlay} /></a>
                        </div>
                    </div>
                </div>
                <div className='author_info'>
                    <span>Разработка сайтов и мобильных приложений</span><span><a href='#'>www.sunrisestudio.pro 2020</a></span>
                </div>
            </div>
        </section>
       
    )
}
