console.log("Frontend running")

let socket = io()

socket.on('connected', () => {
    console.log(socket.id)
})

$(function() {
    let inputChat = $('#inputChat')
    let sendChat = $('#sendChat')
    let msgList = $('#msgList')

    sendChat.click(() => {
        socket.emit('send_chat', {
            message: inputChat.val()
        })
    })

    socket.on('recieve_chat', function(data) {
        msgList.append(`<li>${data.message}</li>`)        
    })

})