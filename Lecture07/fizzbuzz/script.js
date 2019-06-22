window.onload = function() {
  const num = document.getElementById('num')
  const print = document.getElementById('print')
  const list = document.getElementById('list')

  print.onclick = function () {

    const N = parseInt(num.value)

    // let str = ""
    // for (let i = 1; i <= N; i++) {
    //   str += `<li> ${i} </li>`
    // }
    // list.innerHTML = str

    const start = new Date().getTime()

    for (let i = 1; i <= N; i++) {
      let item = document.createElement('li')
      item.textContent = i
      list.appendChild(item)
    }

    console.log(new Date().getTime() - start)
  }




}
