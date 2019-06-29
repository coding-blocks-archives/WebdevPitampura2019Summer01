window.onload=function(){

    let button=document.getElementsByClassName('button')
    let result=document.getElementById('result')
    let clear=document.getElementById('clear')
    
    // button.onclick=function(value){  //input.value
        
    // }
    
    /*result.value:-    jo bhi expression likkha hai input text mein vo hai result.value
    result hai input text ki id matlab jo bhi type karenge input box mein vo result 
    hai or usko show karne ke liye result.value hai jaise j=karte hain input.value Farak bas itna hai 
    ki input ki id is result toh result.value kardiya
    */
    display=function (val){
        result.value+=val   //jo bhi pehle se expression likkha hoga  usmein jo bhi button ham click
        //karenge toh uska display call hoga or display hoga. + matlab ye nahi ki value add hogi.
        //+ matlab result.value ke just aage vo value ya operator dikhajayega

    }
    
    solution=function (){   //jab == click kiya toh ye function call hoga jo answer dega
        let x=result.value  //is jo bhi expression likkha hoga
        
        let y=eval(x)       //eval ek inbuilt function hai js mein jo evaluate karta hai expression ko or answer deta hai
       
        result.value=y  //ab maine result.value ko actual answer jo aaega eval karke usse override krdia
    }
    
    clr=function (){
        result.value=''
    }
}