//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timelineState;


//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let video1 = 'videos/video1.webm';

//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'sounds/tick.mp3';

//~~~~~Background Video Variables~~~~~~//
let backgroundVideoArray = ['videos/motorCycle.mp4',
                        'videos/text_gen.webm',
                        'videos/Road_Zoom.mp4'];
let backgroundVideoIndex = 0;

//test

//~~~~~Hologram Video Variables~~~~~~//
let hologramVideoArray = ['videos/Border_Text.webm',
                          'videos/Trump_Speech.webm'];
let hologramVideoIndex = 0;



//~~~~~Cockpit Image Variables~~~~~~//
let cockpitImageArray = ['images/cockpits/Cockpit_Blue.png',
                      'images/cockpits/Cockpit_Green.png',
                      'images/cockpits/Cockpit_Purple.png',
                      'images/cockpits/Cockpit_Red.png',
                      'images/cockpits/Cockpit_White.png'];
let cockpitImageIndex = 0;



//=======================//
//     draw()
//=======================//
//
//main loop for checking game states and triggering events
// let vidEndTest = document.getElementById('backgroundVideo').addEventListener;
// function draw(){
//   if(vidEndTest.ended){
//   console.log("done");
// }
// }




function ended(){
  console.log('ebded');
}


// function mousePressed(){
//   // console.log('pressed');
//   // let buttonState = document.getElementById('button1').style.visibility = "hidden";
//   navigator.mediaDevices.getUserMedia(audio: true);
// }




function startSite(){
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let bgVid = document.getElementById('backgroundVideo');
  let holoVid = document.getElementById('hologramContent');
  bgVid.play();
  holoVid.play();
}


//=======================//
//      changeBgVideo()
//=======================//
//
//Changes the background video on call, by cycling through the background
// image array
function changeBgVideo(backgroundVideo){
  console.log(button);
   let bgVid = document.getElementById('backgroundVideo').src = backgroundVideoArray[backgroundVideo];
}

//=======================//
//      changeHologramVideo()
//=======================//
//
//Changes the background video on call, by cycling through the background
// image array
function changeHologramVideo(hologramVideo){
  console.log(button);
   let holoVid = document.getElementById('hologramContent').src = hologramVideoArray[hologramVideo];
}


//=======================//
//    changeCockpit()
//=======================//
//
//Changes the background image on call, by cycling through the cockpit
// image array
function changeCockpit(cockpitImage){
  console.log(button);
   let cockpit = document.getElementById('cockpitStyle').src = cockpitImageArray[cockpitImage];
}

//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  //console.log("moved");
  getAudioContext().resume()
}
