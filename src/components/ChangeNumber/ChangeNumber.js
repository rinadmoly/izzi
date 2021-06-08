import React from 'react'
import PhoneInput from 'react-phone-input-2'

import './change-num.css'
import 'react-phone-input-2/lib/style.css'

const ChangeNumber = () => {
    return(
        <div className='change_num'>
            <p>Смена номера</p>
            <span>Введите новый номер телефона чтобы отправить код подтверждения</span>
            <PhoneInput
                placeholder='Новый номер телофона'
                country={'kg'} 
                value={'996'}
                inputStyle={{
                    border: "1px solid black",
                    background: "white",
                    borderRadius: "12px",
                    height:"44px",
                    width:"316px"
                }}
                buttonStyle={{
                    background: "white",
                    border: "1px solid black",
                    borderRight: "none",
                    borderRadius: "12px 0 0 12px",
                    paddingLeft: "10px",
                }}
                containerStyle={{
                    height:"44px",
                    marginTop:"24px"
                }}
                />
            <button>Далее</button>
        </div>
    )
}

export default ChangeNumber
