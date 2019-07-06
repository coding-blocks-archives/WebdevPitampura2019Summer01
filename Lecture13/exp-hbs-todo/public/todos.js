window.onload = function() {
  const todolist = document.getElementById('todolist')
  const task = document.getElementById('task')
  const submit = document.getElementById('submit')

  function refreshList(taskList) {
    todolist.innerHTML = taskList.reduce((a, t) => a + `<li>${t}</li>`, '')
  }

  const todosRespHandler = (resp) => {
    resp.json().then((r) => {
      console.log(r)
      refreshList(r)
    })
  }

  fetch('/todos').then(todosRespHandler)

  submit.onclick = function() {
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: task.value,
      }),
    }).then(todosRespHandler)
  }
}
