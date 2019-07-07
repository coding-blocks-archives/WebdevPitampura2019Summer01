

$(() => {

  $('#add').click(() => {
    console.log('add clicked')

    $('#todolist').append(
      `<li>${$('#task').val()}</li>`
    )
  })



  $('button.todo').click(() => {
    console.log('btn clicked')
  })

  $('#taskform').submit((e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(e)
  })

})
