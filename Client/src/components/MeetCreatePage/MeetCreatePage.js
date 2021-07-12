import React from 'react'
import './MeetCreatePage.css'
import '../StyleSheets/MiddleCard/MiddleCard.css'
import '../StyleSheets/Buttons/BigBlueButton.css'
import '../StyleSheets/Input/NormalInput.css'
class MeetCreatePage extends React.Component{
    // constructing the class to handle the input in name
    //input and handle submi
    constructor(props){
        super(props);
        this.state = {name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        this.setState({name: event.target.value});
    }
    // redirecting to the meet page
    handleSubmit(event) {
        window.location.replace(`https://debo-video-call.herokuapp.com/?name=${this.state.name}`)
        event.preventDefault();
      }
    render(){
        return (
            <div className='Middle-Card'>
                <p id = 'JoinPage-Heading'>Create a Teams Meeting</p>
                <div id = 'form-container'>
                    <form onSubmit={this.handleSubmit} id='name-form-to-create-meet' >
                    <label for='name'>Enter your Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} className='Normal-Input' id='name' name='name' placeholder='Enter Your Name ' required />
                    </form>
                </div>
                <button type='submit' form='name-form-to-create-meet' className='Big-Blue-Button' id='JoinPage-Button'>Create Now</button>
            </div>
        )
    }

}
export default MeetCreatePage