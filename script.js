let display = document.getElementById("display");

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let start = document.getElementById("start");


let currentMinute;
let currentSecond;
let interval;

for (let i = 0; i <= 60; i++) {  
    minutes.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

for (let i = 1; i <= 60; i++) {  
    seconds.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}

start.addEventListener('click', function(){
    currentMinute = minutes.value;
    currentSecond = seconds.value;

    display.childNodes[1].innerHTML = currentMinute + ":" + currentSecond;

    interval = setInterval ( function (){

        currentSecond--;
        if(currentSecond <= 0){
            if(currentMinute > 0){
                currentMinute--;
                currentSecond = 59;
            }else{
                alert("It's over!");
                document.getElementById("sound").play();
                clearInterval(interval);
            }
            
        }

        display.childNodes[1].innerHTML = currentMinute + ":" + currentSecond;
    },1000);

})