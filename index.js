const hourE1=document.getElementById("hour")
const minuteE1=document.getElementById("minutes")
const secondE1=document.getElementById("seconds")
const ampmE1=document.getElementById("ampm")


function updateclock()
{
   let h =new Date().getHours();
    let m=new Date().getMinutes();
    
    let s=new Date().getSeconds();
    let am_pm="AM"; // we have to write logic for this
    if(h>12)
    {
        h=h-12;
        am_pm="PM";
    }

    h=h<10?"0"+h:h;

    hourE1.innerText=h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    ampmE1.innerText=am_pm; 
    setTimeout(()=>{updateclock()},1000)
}
updateclock();




