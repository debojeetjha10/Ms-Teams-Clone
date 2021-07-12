//this page lets us choose wheather we want to join ameet or create a new one
import React from 'react'
import './JoinCreateDecidePage.css'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import {Link} from 'react-router-dom'
class JoinCreateDecidePage extends React.Component{

    render(){
        return (
            <div className='Middle-Card' >
                <div id='Join-Create-Button-Container'>
                <Link to= '/create'><button className='Big-Blue-Button' id='Create-Meet-Button'>Create a Meet</button></Link>
                <Link to= '/join'><button className='Big-Blue-Button' id='Join-Meet-Button'>Join a Meet</button></Link>
                <Link to= '/joinchat'><button className='Big-Blue-Button' id='Join-Chat-Button'>Join a Chat</button></Link>

                </div>
            </div>
        )
    }

}
export default JoinCreateDecidePage