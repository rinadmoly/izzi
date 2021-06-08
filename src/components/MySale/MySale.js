import React from 'react'
import ButtonGroup from '../ButtonGroup'
import './my-sale.css'

const MySale = () =>{
    const items = [
        {id:0, label: 'Active', status: 'active', checked: true},
        {id:1, label: 'Actived', status: 'actived', checked: false},
        {id:2, label: 'Dead', status: 'dead', checked: false}
    ];
    
    return(
        <div className='my_sale'>
            <p>Мои акции</p>
            <ButtonGroup item={items}
                onButtonClick={ (name) => console.log(name)} />
            <div className='sale_section'>
                <div className='sale_header'>
                    <div className='sale_title'>
                        <p>Название акции</p>
                    </div>
                    <div className='sale_quantity'>
                        <p>Количество</p>
                    </div>
                </div>
                <div className='sale_card'>
                    <div className='sale_card_name'>
                        <p>Блюда в четырех ресторанах «Чайхана № 1» за полцены</p>
                    </div>
                    <div className='sale_card_change'>
                        <div className='sale_card_quantity'>
                            <p>22</p>
                        </div>
                        <div className='sale_card_status'>
                            <button>Активировать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySale
