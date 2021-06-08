import React, { Component } from 'react'
import './partner.css'
import ProfileNav from '../ProfileNav'
import PartnerForm from '../PartnerForm/PartnerForm'

export default class Partner extends Component {
    render() {
        return (
            <div id='partner_panel'>
               <div className='container'>
                    <div className='partner_panel'>
                        <ProfileNav />
                        <PartnerForm />
                    </div>
               </div>
            </div>
        )
    }
}





 
