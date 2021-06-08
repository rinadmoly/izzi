import React from 'react'
import {RiPhoneFill} from 'react-icons/ri'
import {MdPhotoCamera} from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import {IoLogoInstagram} from 'react-icons/io5'
import {FaFacebookF, FaTelegramPlane, FaVk} from 'react-icons/fa'
import {SiOdnoklassniki, SiWhatsapp} from 'react-icons/si'

import './be-partner.css'

const BePartner = () =>{
    return(
        <>
        <p className='add_form_title'>Стать партнером</p>
            <div className='partner_form_list'>
                
                <div className='add_form'>
                    <p>Заполните формы</p>
                    <div className='form_add_photo'>
                        <div class="form_group_area">
                            <label class="label">
                                <i class="material-icons"><MdPhotoCamera /></i>
                                <input type="file"/>
                            </label>
                        </div>
                        <div className='form_add_button'>
                            <input type="file" name="file" id="file" class="input-file"/>
                            <label for="file" class="btn btn-tertiary js-labelFile">
                            <span class="js-fileName">Загрузить аватар</span>
                            </label>
                        </div>
                    </div>
                    <div className='about_compony_from'>
                        <input placeholder='Название компании' required></input>
                        <textarea required placeholder='Описание компании. Например: чем занимается компания.'></textarea>
                    </div>
                    <div className='info_for_partner'>
                        <p>Что дает партнерство</p>
                        <span>Заполните формы и отправьте заявку для того чтоб стать партнером <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat, fames urna dui convallis volutpat. Odio posuere condimentum orci sagittis potenti erat. Lorem integer et potenti consectetur nam vitae. Vitae et scelerisque metus tempus consectetur</span>
                    </div>
                </div>
                <div className='add_contact_form'>
                    <p>Укажите ваши контакты</p>
                    <div className='add_contact'>
                        <div className='add_contact_input'>
                            <i><FiMail /></i>
                            <input placeholder='E-mail'/>
                        </div>
                        <div className='add_contact_input'>
                            <i><HiOutlineLocationMarker  /></i>
                            <input placeholder='Адрес'/>
                        </div>
                        <div className='add_contact_input'>
                            <i><RiPhoneFill /></i>
                            <input placeholder='Телефон'/>
                        </div>
                        {/* <button onClick={addForm}></button> */}
                        <button><i><BsFillPlusCircleFill /></i>Добавить номер телефона</button> 
                    </div>
                    <div className='add_networks'>
                        <p>Укажите ваши соц. сети</p>
                        <div className='add_network_input'>
                            <i><IoLogoInstagram /></i>
                            <input placeholder='Instagram'/>
                        </div>
                        <div className='add_network_input'>
                            <i><FaFacebookF /></i>
                            <input placeholder='Facebook'/>
                        </div>
                        <div className='add_network_input'>
                            <i><SiOdnoklassniki /></i>
                            <input placeholder='Одноклассники'/>
                        </div>
                        <div className='add_network_input'>
                            <i><FaVk /></i>
                            <input placeholder='ВКонтакте'/>
                        </div>
                        <div className='add_network_input'>
                            <i><SiWhatsapp /></i>
                            <input placeholder='WhatsApp'/>
                        </div>
                        <div className='add_network_input'>
                            <i><FaTelegramPlane /></i>
                            <input placeholder='Telegram'/>
                        </div>
                        <button className='add_form_submit'>Отправить заявку</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BePartner;
