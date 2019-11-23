//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timelineState;


//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let video1 = 'assets/videos/video1.webm';

//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'assets/sounds/tick.mp3';

//~~~~~Background Video Variables~~~~~~//
let backgroundVideoArray = ['assets/videos/motorCycle.mp4',
                        'assets/videos/text_gen.webm',
                        'assets/videos/Road_Zoom.mp4'];
let backgroundVideoIndex = 0;


//~~~~~Hologram Video Variables~~~~~~//
let hologramVideoArray = ['assets/videos/Border_Text.webm',
                          'assets/videos/Trump_Speech.webm'];
let hologramVideoIndex = 0;



//~~~~~Cockpit Image Variables~~~~~~//
let cockpitImageArray = ['assets/images/cockpits/Cockpit_Blue.png',
                      'assets/images/cockpits/Cockpit_Green.png',
                      'assets/images/cockpits/Cockpit_Purple.png',
                      'assets/images/cockpits/Cockpit_Red.png',
                      'assets/images/cockpits/Cockpit_White.png'];
let cockpitImageIndex = 0;

let bgVid;



//=======================//
//     draw()
//=======================//
//
//main loop for checking game states and triggering events
function draw(){
console.log('hello');
}



function ended(){
  console.log('ebded');
}


function mousePressed(){
  console.log('pressed');
  let buttonState = document.getElementById('button2').style.visibility = "hidden";
}

//=======================//
//      changeBgVideo()
//=======================//
//
//Changes the background video on call, by cycling through the background
// image array
function changeBgVideo(button){
  console.log(button);
   let bgVid = document.getElementById('backgroundVideo').src = backgroundVideoArray[backgroundVideoIndex];
   backgroundVideoIndex ++;
   //if we have reached the end of the array of background video, start from
   //the beginning again
   if (backgroundVideoIndex >= backgroundVideoArray.length){
     backgroundVideoIndex = 0;
   }
}


function changeHologramVideo(button){
  console.log(button);
   let holoVid = document.getElementById('hologramContent').src = hologramVideoArray[hologramVideoIndex];
   hologramVideoIndex ++;
   //if we have reached the end of the array of background video, start from
   //the beginning again
   if (hologramVideoIndex >= hologramVideoArray.length){
     hologramVideoIndex = 0;
   }
}


//=======================//
//    changeCockpit()
//=======================//
//
//Changes the background image on call, by cycling through the background
// image array
function changeCockpit(button){
  console.log(button);
   let bg = document.getElementById('cockpitStyle').src = cockpitImageArray[cockpitImageIndex];
   cockpitImageIndex++;
   //if we have reached the end of the array of background images, start from
   //the beginning again
   if (cockpitImageIndex >= cockpitImageArray.length){
     cockpitImageIndex = 0;
   }
}

//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  //console.log("moved");
  getAudioContext().resume()
}
