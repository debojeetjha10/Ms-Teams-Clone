//this is the join-meet page
import React from 'react'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
import './JoinChat.css'
class JoinChat extends React.Component{
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
    //on submit we wiull land on the meet page
    handleSubmit(submitevent){
        window.location.replace(`https://debo-video-call.herokuapp.com/chat/${this.state.roomId}?name=${this.state.name}`);
        submitevent.preventDefault();
    }
    render(){
        return (
            <div className='Middle-Card'>
                <p id = 'JoinChat-Heading'>Join a Teams Chat</p>
                <div id = 'form-container'>
                    <form id='name-roomId-form' onSubmit={this.handleSubmit}>
                    <label for='name'>Name: </label>
                    <input type='text' id='name'required className='Normal-Input' value={this.state.name} onChange={this.handleNameChange} name='name' placeholder='Enter Your Name ' />
                    <label for='roomId'>Room Id: </label>
                    <input type='text' id='roomId' value={this.state.roomId} onChange={this.handleRoomIdChange} required className='Normal-Input' name='roomId'  placeholder='Fill the Room Id of the meeting to Join' />
                    </form>
                <button type = 'submit' form = 'name-roomId-form' className='Big-Blue-Button' id='JoinChat-Button'>Join Now</button>
                </div>
            </div>
        )
    }

}
export default JoinChat