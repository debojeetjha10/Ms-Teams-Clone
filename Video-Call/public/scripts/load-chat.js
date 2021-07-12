//fetching the chat api to get all the msg of the room and showing it to the frontend
fetch('/api/chat/'+ROOM_ID).then(res => res.json()).then(
    data=>{
        let n = data.length
        for(let i = 0;i<n;i++){
            let message = data[i]
            let Msg = document.createElement('li')
            //assigning class name to add styling 
            Msg.className='message'
            //changing the list items inner html
            Msg.innerHTML = `<b>${message.sender}</b><br/> <p>${message.msgContent}</p>`
            //appending the list item into the main chat list
            document.getElementById("messages").appendChild(Msg);
        }
    }
)
