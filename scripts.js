// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const flightPara = document.getElementById("flightStatus");
    const abortButton = document.getElementById("missionAbort");
    const liftButton = document.getElementById("takeoff");
    const colorBackground  = document.getElementById("Backgroundshuttle");
    const heightOfShuttle = document.getElementById("spaceShuttleHeight");
    const toLandButton = document.getElementById("landing");
    let groundZero = Number(heightOfShuttle.innerHTML) ;
    let newHeight =    groundZero + 10000;
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
            heightOfShuttle.innerHTML =newHeight;
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

    moveRight.addEventListener("click", movesRight );

    function movesRight(){
        
        rocketImg.style.position = "relative";
        rocketImg.style.right += "10px";
    }
    moveLeft.addEventListener("click", movesLeft );
   
    function movesLeft(){
        rocketImg.style.position = "relative";
        rocketImg.style.left += "10px";
        console.log("hello");
    }
    moveDown.addEventListener("click", movesDown);
    function(){}


    moveUp.addEventListener("click", movesUp);
  


}
window.addEventListener("load",init)