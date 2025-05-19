function choose()

{
    event.preventDefault();
    let name= document.getElementById("name");
    let f= document.getElementById("f");
    let s= document.getElementById("s");
    let t=document.getElementById("t");
    let fo=document.getElementById("fo");
    let msg=document.getElementById("msg");


if(name.value==="")
    {
    alert("please enter your name");
    msg.innerHTML="";
    name.focus();
    return;

      }
let choice="";
if(f.checked)
    choice="First Year";
if(s.checked)
    choice="Second Year";
if(t.checked)
    choice = "Third Year";
if(fo.checked)
    choice = "Fourth Year";
msg.innerHTML =`Hello ${name.value} , your in ${choice}`;  
}