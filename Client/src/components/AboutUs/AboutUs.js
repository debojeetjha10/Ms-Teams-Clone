//this is the join-meet page
import React from 'react'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './AboutUs.css'
class AboutUs extends React.Component{
    render(){
        return (
            <div className='Middle-Card'>
                <a href="https://github.com/debojeetjha10">Github<br/></a>
                <a href="https://linkin.com/in/debojeetjha">LinkedIn</a>
            </div>
        )
    }

}
export default AboutUs