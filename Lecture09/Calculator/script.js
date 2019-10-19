let state=""
const operators=['+', '-', '*', '/', 'sqrt', '%']
let flag=false

let render=function(state){
    // // let eqns=state.split(',')
    // let op
    // for(let i=0;i<state.length;i++){
    //     for(let j=0;j<operators.length;j++){
    //         if(state[i]==operators[j]){
    //             op=state[i]
    //         }
    //     }
    // }
    // let nos=state.split(op)
    // let ans=nos[0]opnos[1]
    if(flag){
        let ans=eval(state)
        state=' '
        flag=false
        return ans
    }
    else{
        return state
    }
}

let paint=function(){
    let display=document.getElementById('display')
    display.value=render(state)
}

window.onload=function(){
    const key=document.getElementsByTagName('button')
    for(let i=0;i<key.length;i++)
    {
        key[i].addEventListener('click', function(e){
            if(e.target.innerText=='='){
                flag=true
            }
            else if(e.target.innerText=='√'){
                state='Math.sqrt('
            }
            else if(e.target.innerText=='C'){
                state=' '
            }
            else{
                if(state[state.length]=='Math.sqrt('){
                    state+=e.target.innerText+')'
                    flag=true
                }
                else{
                    state+=e.target.innerText
                }
            }
            paint()
        })
    }
}