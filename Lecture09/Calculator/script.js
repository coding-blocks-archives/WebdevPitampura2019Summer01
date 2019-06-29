
const input = document.getElementById('inpu')
const c = document.getElementById('c')
const equal = document.getElementById('equal')
const all = document.querySelector('.all')
all.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        if (e.target.innerText != 'C' && e.target.innerText != '=') {
            input.value += e.target.innerText
        }
        if (e.target.innerText == 'C') {
            input.value = ""
        }
        else if (e.target.innerText == '=') {
            try {
                input.value = eval(input.value)
            } catch (err) {
                alert('Invalid Evaluation!')
            }

        }
    }
})


