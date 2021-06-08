import React from 'react'
import { ContextConsumer } from '../context'

const Hoc = () =>(Wrap) =>{
    return(props) =>{
        return(
            <ContextConsumer>
                {
                    
                    (service) =>{
                        return(
                        <Wrap {...props} service = { service } />)
                    }
                }
            </ContextConsumer>
        )
    }
}

export default Hoc