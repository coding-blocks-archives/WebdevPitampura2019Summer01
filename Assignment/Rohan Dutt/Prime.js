
function printPrime() {

    const para = document.getElementById("result");
    var i = 0;
    var j = 0;
                
                
    upperlimit = document.getElementById('upperlimit').value;
    var total = 0;

    for (i = 2; i <= upperlimit; i++) {
        var count = 0;
 
        for (j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                count++;
            }
        }

        if (count == 0) {
            para.insertAdjacentHTML('beforeend', i + '<br>');
                total++;

        }

    }
para.insertAdjacentHTML('beforeend','<br>' + "Total "+ total +" prime numbers");

}




function checkPrime() {
    checkresult = document.getElementById("checkresult");

    check = document.getElementById('check').value;
    var i = 0;
    var count = 0;
    for(i = 2; i < check/2; i++)
    {
        
        if(check%i==0){
            count++;
        }
    }
    if(count>0){
        checkresult.innerHTML = check + " is not a prime number";
    }
    else {
        checkresult.innerHTML = check + " is a prime number";
    }
}
