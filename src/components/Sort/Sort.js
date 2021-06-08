import React, { useState, useRef, useEffect } from 'react'
import './sort.css'

const Sort = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activePopup, setActivePopup] = useState(0);
    const item = items[activePopup]
    console.log(activePopup)
    const sortRef = useRef();
    
    
    const onToggleSpan = () =>{
        setVisiblePopup(!visiblePopup);
    }
    const onSelectItem =(index) =>{
        setActivePopup(index);
        setVisiblePopup(false)
    }

    const onHandleSort = (e) =>{
        if(!e.path.includes(sortRef.current)){
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', onHandleSort)
    }, [])
    return (
        <div ref={sortRef} className='sort'>
            <div className='sort-label'>
                <b>Сортировать по:</b>
                <span onClick={onToggleSpan}>{item}</span>
            </div>
            {visiblePopup && (<div className='sort-popup'>
                <ul>{
                    items.map((name, index) =>(
                        <li key={name}
                            onClick={() =>onSelectItem(index)}
                            className={activePopup === index ? 'active' : ''}>{name}</li>
                    ))
                    }
                </ul>
            </div>)}
        </div>
    )
}

export default Sort
