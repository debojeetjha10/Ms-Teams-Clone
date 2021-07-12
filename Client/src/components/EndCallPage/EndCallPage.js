//this page(box) will appear after the metting ends
import React from 'react'
import './EndCallPage.css'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import {Link} from 'react-router-dom'
class EndCallPage extends React.Component{

    render(){
        return (
            <div className='Middle-Card' id='end-call-container' >
                <h1>Thank you for attending the Meeting</h1>
                <Link to= '/'><button className='Big-Blue-Button' id='back-to-home-screen-button'>Back To Home</button></Link>
                </div>
        )
    }

}
export default EndCallPage