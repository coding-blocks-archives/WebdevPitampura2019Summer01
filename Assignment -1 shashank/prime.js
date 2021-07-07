function cPrime(number)
{
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            return false;
        }

    }
    return true;
}

function Prime(number)
{
    let PrimeNumbers=""
    for(let i=2;i<number;i++)
    {
        if(CPrime(i))
            PrimeNumbers=PrimeNumbers+i+"<br>";
    }
    return PrimeNumbers;
}

PrimeNumbers=Prime(1000);


DOM=document.getElementById("PrimeNumbers");
DOM.innerHTML=PrimeNumbers; 
