window.onload=function() {
    let add=document.getElementById("add");
   
    add.onclick=function() {
        let name=document.getElementById("name");
        let phno=document.getElementById("phno");
        let address=document.getElementById("address");
        let list=document.getElementById("list");
        let li=document.createElement("li");
        
        li.innerHTML=`
        <span><b>Name</b>: ${name.value}</span> <img src="pic.png" height=60px width=60px> <br> <br>
        <div><b>Phone Number</b>: ${phno.value}</div> <br>
        <div><b>Address</b>: ${address.value}</div> <br>`
        

        let deletebutton=document.createElement("button");
        deletebutton.innerHTML="DELETE";
        deletebutton.onclick=function(event) {
            event.target.parentElement.remove();
            
        }

        let edit=document.createElement("button");
        edit.innerHTML="EDIT";

        edit.onclick=function() {
            li.innerHTML=`<div>Name*: <input type="text" required id="ename"></div>
            <br>
            <div>Phone Number: <input type="number" id="ephno"></div>
            <br>
            <div>Address: <input type="text" id="eaddress"></div>
            <br>`

            done=document.createElement("button");
            done.innerHTML="DONE";
            done.onclick=function() {
                let ename=document.getElementById("ename");
                let ephno=document.getElementById("ephno");
                let eaddress=document.getElementById("eaddress");
                
                li.innerHTML=`<div>Name*: <input type="text" required id="ename"></div>
                <br>
                <div>Phone Number: <input type="number" id="ephno"></div>
                <br>
                <div>Address: <input type="text" id="eaddress"></div>
                <br>
                `

                li.innerHTML=`<span><b>Name</b>: ${ename.value}</span> <img src="pic.png" height=60px width=60px> <br> <br>
                <div><b>Phone Number</b>: ${ephno.value}</div> <br>
                <div><b>Address</b>: ${eaddress.value}</div> <br>`
                li.appendChild(deletebutton);
                li.appendChild(edit);
                
            }

            li.appendChild(done);

        }
        li.appendChild(deletebutton);
        li.appendChild(edit);
        list.appendChild(li);
    }    

}
