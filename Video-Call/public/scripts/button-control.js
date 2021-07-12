//Handling the Calender Pop-Up feature
//If calender-button pressed while calender is off it will turn on else turn off
const handleCalenderDisplay = ()=>{
  //display the calender if not displayed
    if(document.getElementById('google-calender').style.display == 'none'){
      document.getElementById('google-calender').style.display = 'block';
    }
    //hide the calender if displayed
    else{
    document.getElementById('google-calender').style.display = 'none'
    }
  }
  //Initializing the calender as hidden
  document.getElementById('google-calender').style.display = 'none'
  //On-click on the calender-button fire the HandleCalender functionality
  document.getElementById('calender-img-container').onclick = handleCalenderDisplay;
  //Handling the Clock Pop-Up feature
//If Clock-button pressed while Clock is off it will turn on else turn off
const handleClockDisplay = ()=>{
  //display the Clock if not displayed
    if(document.getElementById('clock').style.display == 'none'){
      document.getElementById('clock').style.display = 'block';
    }
    //hide the Clock if displayed
    else{
    document.getElementById('clock').style.display = 'none'
    }
  }
  //Initializing the Clock as hidden
  document.getElementById('clock').style.display = 'none'
  //On-click on the Clock-button fire the HandleClock functionality
  document.getElementById('clock-img-container').onclick = handleClockDisplay;
  //handling the Search functionality
  //this will open a tab with the search-results ready
  const searchOnBing = ()=>{
    //getting the search input Dom element
    let searchInput = document.getElementById('search-input-box');
    //searching the keyword
    if(searchInput.value != ''){
    window.open(`https://bing.com/search?q=${searchInput.value}`)
    }
    //making the search field empty so that we don't have to
    // erase b/w searches
    searchInput.value = '';
    // returning false to prevent the parent page from reloading
    // This is explained in detailed here : https://stackoverflow.com/questions/49418385/how-to-stop-window-open-from-refreshing-the-window-in-javascript
    return false;       
  }
  // adding the Event-handlers to fire the search functionality
  //on click of the search button search the input text on bing
  document.getElementById('search-button').onclick = searchOnBing;
  //On pressing enter key search on bing  the text in the input field
  document.getElementById('search-input-box').addEventListener('keyup',(event)=>{
    // if keydown of enter key do the search
    if(event.keyCode==13){
    // to prevent any change in the parent
    event.preventDefault();
    //calling the search function
     searchOnBing();
    }
    })

    function copyToClipboard(text) {
      var dummy = document.createElement("textarea");
      // to avoid breaking orgain page when copying more words
      // cant copy when adding below this code
      // dummy.style.display = 'none'
      document.body.appendChild(dummy);
      //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
      dummy.value = text;
      //selecting the dummy to copy it 
      dummy.select();
      document.execCommand("copy");
      // removing the dummy so it won't make any unwanted changes in the website
      document.body.removeChild(dummy);
  }
  //copying the roomId on the c lick of the button
  document.getElementById('copy-roomId-button').addEventListener('click', (event)=>{
    //preventing for any unwanted change on the main page
    event.preventDefault()
    copyToClipboard(ROOM_ID)
  })