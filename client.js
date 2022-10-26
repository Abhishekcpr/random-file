const socket = io('http:localhost/8000') ;

const form = document.getElementById('send-message') ;
const messageInp = document.getElementById('text') ;
const messageContainer = document.querySelector('.container')

const name = prompt("Enter your name to join chat :") ;
socket.emit('new-user-joined', name) ;

socket.on('user-joined' , data=>{
    
})