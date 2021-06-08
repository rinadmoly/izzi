import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/header';
import Partner from '../Partner/Partner';
import Main from '../Main/Main'
import PhoneInput from 'react-phone-input-2'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import {Hoc} from '../../hoc/hoc'
const App =({service}) =>{
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:3000/data.json').then((resp)=> resp.json()).then((json)=>{
    //         setData(json.data)
    //     })
    // }, [])
    return (
        <Router>
            <Header />
            <Route exact path='/' component={Main} />
            <Route path='/partner/' component={Partner} />
            <Route path='/login' component={LogIn} />
            <Footer />
        </Router>
    )
}

const LogIn =()=>{
    return(
        <section id='log_in'>
            <div className='log_in'>
                <p>Войдите, чтобы продолжить</p>
                
                <PhoneInput
                    isValid={(value, country) => {
                        if (value.match(/12345/)) {
                          return 'Invalid value: '+value+', '+country.name;
                        } else if (value.match(/1234/)) {
                            return false;
                        } else {
                            return true;
                        }
                    }}
                    placeholder='Новый номер телофона'
                    country={'kg'} 
                    enableSearch={true}
                    inputStyle={{
                        border: "none",
                        background: "white",
                        borderRadius: "12px",
                        height:"44px",
                        width:"316px"
                    }}
                    buttonStyle={{
                        background: "white",
                        border: "none",
                        borderRight: "none",
                        borderRadius: "12px 0 0 12px",
                        paddingLeft: "10px",
                    }}
                    containerStyle={{
                        height:"44px",
                        marginTop:"24px"
                    }}
                />

                <button>Войти</button>
                <div className='    sign_up'>
                    <a href='#'>Зарегистрироваться</a>
                </div>
            </div>
        </section>
    )
}

export default App

// const SignUp =() =>{
    //     return(
        
//     )
// }
