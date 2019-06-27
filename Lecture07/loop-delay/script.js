window.onload = function() {
  let wait = document.getElementById('wait')
  let count = document.getElementById('count')
  let x = document.getElementById('x')

  let c = 0

  count.onclick = function() {
    c++
    x.innerText = c
  }

  wait.onclick = function () {

    let start = new Date().getTime()
    while (new Date().getTime() - start < 5000) {}
    x.innerText = "WAIT OVER"


  }
}
