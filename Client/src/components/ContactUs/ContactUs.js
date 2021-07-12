//this is the join-meet page
import React from 'react'
//importing the neccesary css files and logos
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './ContactUs.css'
//This page shows the contact info
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
// exporting the class so that we can import and use it diff files
export default ContactUs