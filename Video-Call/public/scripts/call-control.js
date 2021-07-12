//Handling the Mute/Unmute button
const MuteUnmute = () => {
  //Getting the state of the audio track
  //the following expression will return true if audio is enabled else false\
    const state = MyVideoStream.getAudioTracks()[0].enabled;
    //if enabled disabling the audio
    // making UI changes accordingly
    if (state) {
      //Disabling the audio
      MyVideoStream.getAudioTracks()[0].enabled = false;
      // making UI changes 
      //Changing the button image
      document.getElementById('mute-button').src  = 'logos/mute.png'
      //changing the title
      document.getElementById('mute-button').title = 'press here to unmute'
      //changing the back-ground color
      document.getElementById('mute-button').style.backgroundColor='red';


    } 
    //if disabled enabling the audio
    // making UI changes accordingly
    else {
      //Enabling the audio
      MyVideoStream.getAudioTracks()[0].enabled = true;
      //Making the UI changes accordingly
      //Changing the button image
      document.getElementById('mute-button').src = 'logos/unmute.png'
      //changing the title
      document.getElementById('mute-button').title = 'press here to mute'
      //changing the back-ground color
      document.getElementById('mute-button').style.backgroundColor='blueviolet';
    }
  }
  //Handling the Video-On-off functionality
  const PlayStop = () => {
  //Getting the state of the video track
  //the following expression will return true if video is enabled else false
    var state = MyVideoStream.getVideoTracks()[0].enabled;
    //if enabled disabling the video
    // making UI changes accordingly
    if (state) {
      //Disabling the video
      MyVideoStream.getVideoTracks()[0].enabled = false;
      //Making UI changes
      //Changing the button image
      document.getElementById('video-on-off-button').src = 'logos/video-off.png';
      //changing the back-ground color
      document.getElementById('video-on-off-button').style.backgroundColor='red';
      //changing the title
      document.getElementById('video-on-off-button').title = 'press here to turn on video'

    } 
    //if disabled enabling the video
    // making UI changes accordingly   
    else {
     // Enabling the video
      MyVideoStream.getVideoTracks()[0].enabled = true;
      //making UI changes
      //Changing the button image
      document.getElementById('video-on-off-button').src = 'logos/video-on.png'
      //changing the title
      document.getElementById('video-on-off-button').title = 'press here to turn off video'
      //changing the back-ground color
      document.getElementById('video-on-off-button').style.backgroundColor='blueviolet';
    }
  }
  //firing the above mute/unmute and Video-on/Off functions with the click on the buttons
  document.getElementById('mute-button').onclick = MuteUnmute;
  document.getElementById('video-on-off-button').onclick = PlayStop;
  // handling the end-call feature
  const EndCall = () => {
    socket.emit('disconnect')
    // redirecting to the wnd-call msg website this will disconnect us from the existing meeting 
    window.location.replace('https://example404.azurewebsites.net/end');
  }
  // firing the endcall function on click on the end-call button
  document.getElementById('call-end-button').onclick = EndCall;