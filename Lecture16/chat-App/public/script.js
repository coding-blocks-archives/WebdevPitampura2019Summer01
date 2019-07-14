const socket = io()

$(function() {
    let loginDiv = $('#loginDiv')
    let chatDiv = $('#chatDiv')

    let loginInput = $('#loginInput')
    let loginButton = $('#loginButton')

    let chatInput = $('#chatInput')
    let chatButton = $('#chatButton')
    let msglist = $('#msgList')

    let user;

    loginButton.click(() => {
        loginDiv.hide()
        chatDiv.show()

        user = loginInput.val()
    })

    chatButton.click(() => {
        
        socket.emit("send_chat", {
            username: user,
            message: chatInput.val()
        })
    })

    socket.on("recieve_chat", (data) => {
        msglist.append(`<li>${data.username} :${data.message}</li>`)
    })
})