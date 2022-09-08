basic.addEventListener('click', function (event) {
    title=event.target.innerHTML
    if(title[10]==="i") display.value+=""
    else if(title==="AC") display.value=""
    else if(title==="C") display.value=display.value.substring(0, display.value.length - 1);
    else if(title==="=") display.value=display.value+"="+eval(display.value)
    else display.value+=title
})

