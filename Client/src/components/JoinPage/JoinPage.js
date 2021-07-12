//this is the join-meet page
import React from 'react'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './JoinPage.css'
class JoinPage extends React.Component{
    // constructing the class to handle the input in name and roomId
    //input and handle submit
    constructor(props){
    super(props);
    this.state = {name: '',roomId:''} ;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRoomIdChange = this.handleRoomIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(nameChngevent){
        this.setState({name : nameChngevent.target.value})
    }
    handleRoomIdChange(roomIdChngevent){
        this.setState({roomId:roomIdChngevent.target.value})
    }
    //on submit we will land on the meet page
    handleSubmit(submitevent){
        window.location.replace(`https://debo-video-call.herokuapp.com/${this.state.roomId}?name=${this.state.name}`);
        submitevent.preventDefault();
    }
    render(){
        return (
            <div className='Middle-Card'>
                <p id = 'JoinPage-Heading'>Join a Teams Meeting</p>
                <div id = 'form-container'>
                    <form id='name-roomId-form' onSubmit={this.handleSubmit}>
                    <label for='name'>Name: </label>
                    <input type='text' id='name'required className='Normal-Input' value={this.state.name} onChange={this.handleNameChange} name='name' placeholder='Enter Your Name ' />
                    <label for='roomId'>Room Id: </label>
                    <input type='text' id='roomId' value={this.state.roomId} onChange={this.handleRoomIdChange} required className='Normal-Input' name='roomId'  placeholder='Fill the Room Id of the meeting to Join' />
                    </form>
                <button type = 'submit' form = 'name-roomId-form' className='Big-Blue-Button' id='JoinPage-Button'>Join Now</button>
                </div>
            </div>
        )
    }

}
export default JoinPage