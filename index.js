const hours= document.querySelector('.hrs')
const minutes= document.querySelector('.mins')
const seconds= document.querySelector('.secs')

setInterval(runClock,1000)

function runClock(){
    const time= new Date();
    const s=time.getSeconds()/60;
    const m=(s+time.getMinutes())/60;
    const h=(m+time.getHours())/12;

    hours.style.setProperty('--rotation',h*360) 
    minutes.style.setProperty('--rotation',m*360) 
    seconds.style.setProperty('--rotation',s*360) 
}
