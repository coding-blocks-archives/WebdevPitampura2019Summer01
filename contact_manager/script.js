let state=[];

function render()
{
    let html="";
    for(i=0;i<state.length;i++)
    {
        html+=`<ol class="list" id="list${i}">
        <li>Name: ${state[i].name}</li>
        <li>Phone: ${state[i].phone}</li>
        <li>Address: ${state[i].address}</li>
        </ol>`
    }
   
    return  html;
}

function paint()
{
    let showDiv=document.getElementById('showDiv');
    document.getElementById('getName').value="";
    document.getElementById('getPhone').value="";
    document.getElementById('getAddress').value="";
    showDiv.innerHTML=render(state);

}

window.onload=function()
{
    let add=document.getElementById('add');
    add.onclick=function()
    {
        let getname=document.getElementById('getName');
        let getphone=document.getElementById('getPhone');
        let getaddress=document.getElementById('getAddress');

        let name1=getname.value;
        let phone1=getphone.value;
        let address1=getaddress.value;
        state.push({
            name:name1,
            phone:phone1,
            address:address1
        })
        paint()
    }






}
