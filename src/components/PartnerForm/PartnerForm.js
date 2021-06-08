import React from 'react'
import BePartner from '../BePartner'
import ChangeNumber from '../ChangeNumber'
import MySale from '../MySale'
import NumberConfirm from '../NumberConfirm'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MyCoupon from '../MyCoupon'

const PartnerForm = () =>{
    // const addForm =()=>{
    //     alert('jj')
    // }
    return(
        <div className='profile_wrapper'>
            <Switch>
                <Route exact path='/partner/' component={BePartner} />
                <Route path='/partner/change-number' component={ChangeNumber} />
                <Route path='/partner/confirm-number' component={NumberConfirm} />
                <Route path='/partner/my-sale' component={MySale} />
                <Route path='/partner/my-coupon' component={MyCoupon}/>
            </Switch>
        </div>
    )
}

export default PartnerForm
