// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const flightPara = document.getElementById("flightStatus");
    const abortButton = document.getElementById("missionAbort");
    const liftButton = document.getElementById("takeoff");
    const colorBackground  = document.getElementById("shuttleBackground");
    const heightOfShuttle = document.getElementById("spaceShuttleHeight");//this is getting the number of the space shuttles height
    let groundZero = Number(heightOfShuttle.innerHTML);
    let newHeight = groundZero + 10000;
    const toLandButton = document.getElementById("landing");
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");
    const rocketImg = document.getElementById("rocket");


    liftButton.addEventListener("click", toStart);

    function toStart(){
        let conf = confirm("Confirm that the shuttle is ready for takeoff");
        if(conf){
            flightPara.innerHTML="Shuttle in flight.";
            colorBackground.style.background='blue';
            heightOfShuttle.innerHTML = newHeight;
        }
    }

    toLandButton.addEventListener("click", landing);

    function landing(){
        alert("the shuttle is landing. Landing gear engaged.");
        flightPara.innerHTML="The shuttle has landed.";
        colorBackground.style.background='green';
        heightOfShuttle.innerHTML= groundZero;
    }

    abortButton.addEventListener("click", missionAbort );

    function missionAbort(){
        let conf = confirm("Confirm that you want to abort the mission.");
        if(conf){
            flightPara.innerHTML="Mission aborted";
            colorBackground.style.background='green';
            heightOfShuttle.innerHTML=groundZero;


        }

    }


moveRight.addEventListener("click", movesRight);

rocketImg.style.position = "relative";
rocketImg.style.left = "0px";// setting the "like the margin" left side


function movesRight(){
    let left = parseInt(rocketImg.style.left.replace(/px/,""));
   
        left +=10;//may be refrence to padding (or not) that is why it moves in the opposite direction
        rocketImg.style.left = left + "px";
        
  
   
}
moveLeft.addEventListener("click", movesLeft);

function movesLeft(){
    let left = parseInt(rocketImg.style.left.replace(/px/,""));
        left -= 10;
        rocketImg.style.left = left + "px";
}

moveUp.addEventListener("click", movesUp);

function movesUp(){
    let currentHeight = Number(heightOfShuttle.innerHTML);
    let newHeight = currentHeight + 10000;
    heightOfShuttle.innerHTML = newHeight;
}

moveDown.addEventListener("click", movesDown);

function movesDown(){
    let currentHeight = Number(heightOfShuttle.innerHTML);
    let newHeight = currentHeight - 10000;
    heightOfShuttle.innerHTML = newHeight;
}





 
}
window.addEventListener("load",init)