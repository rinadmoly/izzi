import React from 'react'

import './number-confirm.css'

const NumberConfirm = () =>{
    return(
        <div className="number_comfirm">
            <h1>Смена номера</h1>
            <p>+996 555 555 555</p>
            <a href='#'>Неверный номер телефона?</a>
            <input placeholder='Введите код подтверждения'/>
            <button>Сменить номер</button>
            <div className='resend_code'>
                <p>Не пришло SMS сообщение?</p>
                <button>Отправить снова через 0:59</button>
            </div>
        </div>
    )
}

export default NumberConfirm
