
function createCounter (init, delta) {
  let x = 20
  function count () {
    let x = 10
    init += delta
    console.log(x, init)
  }
  return count
}

const c1 = createCounter(1, 3)
const c2 = createCounter(4, 2)

c1()
c2()
c1()
c2()
