$(() => {

  function refreshList(todos) {
    $('#tasklist').empty()

    todos.forEach(t => {
      $('#tasklist').append(
        `<li>${t}</li>`
      )
    })

  }

  $('#taskform').submit((e) => {
    e.preventDefault()

    $.post(
      '/todos',
      {
        task: $('#task').val()
      },
      (data) => {
        console.log(data)
        refreshList(data)
      }
    )

    // $.get('/todos', (data) => {

    // })

  })

})
