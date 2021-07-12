//this is the join-meet page
import React from 'react'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './ContactUs.css'
class ContactUs extends React.Component{
    render(){
        return (
            <div className='Middle-Card'>
                <p>Email Me: <br/> </p>
                <a href="emailto:debojeetjha@gmail.com">debojeetjha@gmail.com</a>
            </div>
        )
    }

}
export default ContactUs