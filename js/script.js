//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timelineArray = ["splash", "leavingEarth", "trans1", "border", "trans2", "museum", "trans3", "mars"];

let timelineIndex = 0;

//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let marioSound = new Audio();
//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'sounds/tick.mp3';
marioSound.src = 'sounds/mario.mp3';

//~~~~~Background Video Variables~~~~~~//
let backgroundVideoArray = ['videos/LiftOff.mp4',
                          'videos/space.mp4',
                          'videos/space.mp4'];
let backgroundVideoIndex = 0;



//~~~~~Hologram Video Variables~~~~~~//
let hologramVideoArray = ['videos/Trump_Speech.webm',
                        'videos/starman.webm'];
let hologramVideoIndex = 0;


//~~~~~Cockpit Image Variables~~~~~~//
let cockpitColors = {"blue": 'images/cockpits/Cockpit_Blue.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "purple": 'images/cockpits/Cockpit_Purple.png',
                    "red": 'images/cockpits/Cockpit_Red.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "white": 'images/cockpits/Cockpit_White.png'};



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~PART 1: LEAVING EARTH~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function leavingEarth(){
  // window.mediaDevices.getUserMedia({
  //   audio: true,
  //   video: true
  // })
  timelineIndex++
  console.log(timelineArray[timelineIndex]);
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  //Set the hologram button(s) visibillity
  let buttonState = document.getElementById('button1').style.visibility = "visible";
  buttonState = document.getElementById('button2').style.visibility = "visible";
  buttonState = document.getElementById('button3').style.visibility = "visible";
  buttonState = document.getElementById('button4').style.visibility = "visible";
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


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Transition 1: STAR MAN~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function trans1(){
  timelineIndex++
  console.log(timelineArray[timelineIndex]);
  //Set the hologram button(s) visibillity
  let buttonState = document.getElementById('button1').style.visibility = "visible";
  buttonState = document.getElementById('button2').style.visibility = "hidden";
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
    let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["purple"];

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
    border();
    };
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~PART 2: BORDERLINE CRIMINAL~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function border(){
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
    let button2Fun = document.getElementById('button2').onclick = amazonJourney();
    //set the cockpit hologram orb colors
    let cockColor = document.getElementById('cockpitStyle').src = cockpitColors["red"];
  //set and play the appropriate background video
  let bgVid = document.getElementById('backgroundVideo');
  bgVid.src = backgroundVideoArray[1];
  bgVid.play();
  //set the cockpit hologram orb colors
  cockColor = document.getElementById('cockpitStyle');
  cockColor.src = cockpitColors["red"];
  //play the appropriate video on the holo-console
  let holoVid = document.getElementById('hologramContent');
  holoVid.src = hologramVideoArray[1];
  holoVid.loop = true;
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
    //border();
    };
}

//opens a new window with the planet amazon
//
function amazonJourney(){
  window.open("https://thearlman.github.io/Asa_Perlman-Cart_253_Fall_2019/Projects/project2", "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
}








//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  //console.log("moved");
  getAudioContext().resume()
}
