function fn(a) {
    s = "<h3 class='he' align = 'center'> List of Primes upto " + a;
    s += " </h3>"
    arr = [];
    //sieve code
    for (var i = 0; i <= a + 1; i++) {
        arr.push(0);
    }
    arr[2] = 1;
    for (i = 3; i <= a; i += 2) arr[i] = 1;
    for (i = 3; i <= a; i += 2) {
        if (arr[i] === 1) {
            for (var j = i * i; j <= a; j += 2 * i) {
                arr[j] = 0;
            }
        }
    }
    //sieve ends here, add the primes to the string.
    for (i = 0; i <= a; i++) {
        if (arr[i] === 1) {
            s += i + "<br>";
        }
    }
    //newfile
    
    const par = document.getElementById("js");
    par.innerHTML = "";
    par.innerHTML = s;
}
fn(1000);
