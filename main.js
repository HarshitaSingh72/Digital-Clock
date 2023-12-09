function clock(){
    let today = new Date();
    
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hrs = hrs > 12 ? hrs % 12 : hrs;

    if(hrs < 10){
        hrs = "0" + hrs;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }

    document.querySelector(".hours").innerHTML = hrs;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;
}

var updateClock = setInterval(clock,1000);


// let hrs = document.getElementById("hrs");
// let min = document.getElementById("min");
// let sec = document.getElementById("sec");

// setInterval(()=>{
//     let currentTime = new Date();

//     hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
//     min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
//     sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
// }, 1000)