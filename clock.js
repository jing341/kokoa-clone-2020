const clock = document.querySelector('.span-clock');


function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    //clock.innerHTML = hour +":" + minutes + ":"+seconds;
    clock.innerHTML = `${hour}:${minutes}`;
}


function init(){
    setInterval(getTime, 0);
}

init();