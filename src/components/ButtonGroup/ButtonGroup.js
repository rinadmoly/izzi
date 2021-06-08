import React, { useState} from 'react'
import './buttonGroup.css'
const ButtonGroup = ({item,onButtonClick}) =>{
    const [active, setActive] = useState(0)
    const onChangeActive = (index) =>{
        setActive(index);
    }
    return(
        <div className='button_group'>
            {item.map((el, index) => (
                <button 
                    onClick={() =>onChangeActive(index)}
                    key={`${el.label}__${index}`}
                    className={`btn ${active === index ? 'active' : ''}`}
                >{el.label}</button >   
            ))
        }
        </div>
    )
}

export default ButtonGroup;
