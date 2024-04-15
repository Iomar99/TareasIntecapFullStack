let timer;
let isRunning = false;
let hora = 0;
let minuto =0;
let segundo =0;


function StarStop(){
    if (isRunning){
        clearInterval(timer);
        isRunning = false;
    
    } else {
        timer = setInterval(updatetimer, 1000);
        isRunning=true;
    }

}
function formatTime(time){
    return(time < 10 ? '0': '')+time;

}

function Reset(time){
    clearInterval(time);
    isRunning = false;
    hora=0;
    minuto=0;
    segundo=0;
    let display = document.getElementById('display');
    display.innerHTML = '00:00:00';

}


function updatetimer(){
    segundo++;
    if (segundo === 60 ){

    
    segundo=0;
    minuto++;
    if (minuto === 60 ){
        minuto=0;
        hora++;

    }
    }
    let display = document.getElementById('display');
    display.innerHTML = formatTime(hora)+':'+formatTime(minuto)+':'+formatTime(segundo);

}