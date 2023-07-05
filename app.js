const buttons=document.querySelectorAll("button");
const input=document.getElementById("input");

for(let btn of buttons)
{
btn.addEventListener("click",(e)=>
{
    const text=btn.innerText;
    if(text==="C")
    {
        input.value="";
    }
    else if(text==="x")
    {
        input.value+='*';
    }
    else if(text==="=")
    {
        try
        {
            input.value=eval(input.value);
        }
        catch(e)
        {
         input.value="Invalid ";

        }
     

    }
    else{
        input.value=input.value+text;
    }





})

}



