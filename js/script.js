//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timelineArray = ["splash", "leavingEarth", "trans1", "border", "trans2", "museum", "trans3", "mars"];

let timelineIndex = 0;

//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let video1 = 'videos/video1.webm';

//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'sounds/tick.mp3';

//~~~~~Background Video Variables~~~~~~//
let backgroundVideoArray = ['videos/LiftOff.mp4',
                          'videos/space.mp4',
                          'videos/space.mp4'];
let backgroundVideoIndex = 0;



//~~~~~Hologram Video Variables~~~~~~//
let hologramVideoArray = ['videos/Trump_Speech.webm',
                        'videos/Border_Text.webm'];
let hologramVideoIndex = 0;


//~~~~~Cockpit Image Variables~~~~~~//
let cockpitColors = {"blue": 'images/cockpits/Cockpit_Blue.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "purple": 'images/cockpits/Cockpit_Purple.png',
                    "red": 'images/cockpits/Cockpit_Red.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "white": 'images/cockpits/Cockpit_White.png'};


function leavingEarth(){
  timelineIndex++
  console.log(timelineArray[timelineIndex]);
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  //Set the hologram button(s) visibillity
  let buttonState = document.getElementById('button1').style.visibility = "hidden";
  buttonState = document.getElementById('button2').style.visibility = "hidden";
  buttonState = document.getElementById('button3').style.visibility = "hidden";
  buttonState = document.getElementById('button4').style.visibility = "hidden";
  //set and play the appropriate background video
  let bgVid = document.getElementById('backgroundVideo');
  bgVid.src = backgroundVideoArray[0];
  bgVid.play();
  //set the cockpit hologram orb colors
  let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["blue"];
  //play the appropriate video on the holo-console
  let holoVid = document.getElementById('hologramContent');
  holoVid.src = hologramVideoArray[0];
  holoVid.play();
  //check when hologram video is done playing
  let checkEnd = document.getElementById("hologramContent");
  checkEnd.onended = function() {
  //set the cockpit hologram orb color back to white
  let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["white"];
  };
  //check when hologram video is done playing
  let checkHoliEnd = document.getElementById("hologramContent");
  checkHoliEnd.onended = function() {
  //set the cockpit hologram orb color back to white
  cockColor = document.getElementById('cockpitStyle');
  cockColor.src = cockpitColors["white"];
  };
  //check when background video is done playing
  let checkBgEnd = document.getElementById("backgroundVideo");
  checkBgEnd.onended = function() {
    console.log();
    trans1();
    };
}



function trans1(){
  timelineIndex++
  console.log(timelineArray[timelineIndex]);
  //Set the hologram button(s) visibillity
  let buttonState = document.getElementById('button1').style.visibility = "visible";
  buttonState = document.getElementById('button2').style.visibility = "visible";
  buttonState = document.getElementById('button3').style.visibility = "hidden";
  buttonState = document.getElementById('button4').style.visibility = "hidden";
  //set functionality of buttons
    //button1
  let button1Fun = document.getElementById('button1').onclick = function(){
    let holoVid = document.getElementById('hologramContent');
    holoVid.src = hologramVideoArray[1];
    holoVid.play();;
  };
    //button2
    let button2Fun = document.getElementById('button2').onclick = function(){
      let holoVid = document.getElementById('hologramContent');
      holoVid.src = hologramVideoArray[1];
      holoVid.play();;
    };
    //set the cockpit hologram orb colors
    let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["green"];

  //set and play the appropriate background video
  let bgVid = document.getElementById('backgroundVideo');
  bgVid.src = backgroundVideoArray[1];
  bgVid.play();
  //set the cockpit hologram orb colors
  cockColor = document.getElementById('cockpitStyle');
  cockColor.src = cockpitColors["green"];
  //play the appropriate video on the holo-console
  let holoVid = document.getElementById('hologramContent');
  holoVid.src = hologramVideoArray[1];
  holoVid.play();
    //check when hologram video is done playing
    let checkHoliEnd = document.getElementById("hologramContent");
    checkHoliEnd.onended = function() {
    //set the cockpit hologram orb color back to white
    let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["white"];
    };
  //check when background video is done playing
  let checkBgEnd = document.getElementById("backgroundVideo");
  checkBgEnd.onended = function() {
    leavingEarth();
    };
}









//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  //console.log("moved");
  getAudioContext().resume()
}
