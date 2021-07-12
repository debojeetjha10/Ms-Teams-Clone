//this page(box) will appear after the metting ends
import React from 'react'
//importing the neccesary css files and logos
import './EndCallPage.css'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
// using link of react-router-dom to have single-page functionality
import {Link} from 'react-router-dom'
// This page shows the End-call msg
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
// exporting the class so that we can import and use it diff files
export default EndCallPage