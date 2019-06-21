let prime = [];

let n = 100;
let z = 0;

function PrintPrime (n) {
    for (var i=2; i<=n; i++) {
        var isPrime = true;
        for (var j=2; j<=(i/2); j++) {
            if (i%j===0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            prime [z] = i;
            z++;
        }
    }
}

PrintPrime (n);
// let x=123;
// const row = document.getElementById("new-row");
// const divOuter = document.createElement("div");
// divOuter.setAttribute('class', 'col-md-6');
// divOuter.innerHTML = "Hello"
// const primebox = document.createElement("div");
// primebox.setAttribute('class', 'box');   
// row.appendChild(divOuter);
// divOuter.appendChild(primebox);
// var count = 1;
// for (var y=1; y<=prime.length; y++) {
    
//     if (y===1 || (y%6===0&&y>=6)) {
//         const divOuter = document.createElement("div");
//         divOuter.setAttribute('class', 'col-md-6');
//         divOuter.setAttribute('id', 'col'+count);
//         row.appendChild(divOuter);
//         count++;
//     }
//     const createcol= document.getElementById("col"+count-1)
//     // const divOuter = document.createElement("div");
//     const primebox = document.createElement("div");
//     primebox.setAttribute('class', 'box'); 
//     createcol.appendChild(primebox);
//     primebox.innerHTML = prime[y-1];
// }



for (var y=1; y<=prime.length; y++)  {
   
    // await sleep(1000);
    const newelement = document.getElementById("insertPrime");
    const primeSpan = document.createElement("span");
    primeSpan.setAttribute('class', 'box animated swing');
    primeSpan.innerHTML=prime[y-1];
    newelement.appendChild(primeSpan);
}

