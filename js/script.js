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
let backgroundVideoArray = ['videos/LiftOff.webm',
                          'videos/Trans_1.webm',
                          'videos/Space_Border.webm'];
let backgroundVideoIndex = 0;



//~~~~~Hologram Video Variables~~~~~~//
let hologramVideoArray = ['videos/Trump_Speech.webm',
                        'videos/starman.webm',
                        'videos/Border_Text.webm'];
let hologramVideoIndex = 0;


//~~~~~Cockpit Image Variables~~~~~~//
let cockpitColors = {"blue": 'images/cockpits/Cockpit_Blue.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "purple": 'images/cockpits/Cockpit_Purple.png',
                    "red": 'images/cockpits/Cockpit_Red.png',
                    "green": 'images/cockpits/Cockpit_Green.png',
                    "white": 'images/cockpits/Cockpit_White.png'};

let buttonColors = {"blue": "rgba(0,0,255,.3)",
                    "blueHover": "rgba(0,0,255,.7)",

                    "green": "rgba(0,255,0,.3)",
                    "greenHover": "rgba(0,255,0,.7)",

                    "purple": "rgba(195,82,221,.3)",
                    "purpleHover": "rgba(195,82,221,.7)",

                    "red": "rgba(255,0,0,.3)",
                    "redHover": "rgba(255,0,0,.7)"};

  //holi-console buttons
  let button = [document.getElementById('button1'),
                document.getElementById('button2'),
                document.getElementById('button3'),
                document.getElementById('button4')];

  let numOfButtons = 4;

  //holo-console video
  let holoVid = document.getElementById('hologramContent');

  //cockpit color
  let cockColor = document.getElementById('cockpitStyle');

  //background video
  let bgVid = document.getElementById('backgroundVideo');




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

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "visible";
  button[1].style.visibility = "visible";
  button[2].style.visibility = "visible";
  button[3].style.visibility = "visible";

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.backgroundColor = buttonColors['blue'];
    b[i].onmouseover = function(){
      b[i].style.backgroundColor = buttonColors['blueHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.backgroundColor = buttonColors['blue'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
    //button1: RAISE VIDEO VOLUME
    button1.onclick = function(){
    holoVid.volume = holoVid.volume + .2;
  };
    //button2: LOWER VIDEO VOLUME
    button2.onclick = function(){
        holoVid.volume = holoVid.volume - .2;
    };
    //button3: skip to next sequence
    button3.onclick = function(){
        trans1();
    };

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVid.src = backgroundVideoArray[0];
  bgVid.play();
  //set the cockpit hologram orb colors
  cockColor.src = cockpitColors["blue"];

  //~~~~~~~~set and play the appropriate video on the holo-console~~~~~~~~
  //
  //let holoVid = document.getElementById('hologramContent');
  holoVid.src = hologramVideoArray[0];
  holoVid.play();

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
  //hide the cockpit buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
  //set the cockpit hologram orb color back to white
  cockColor.src = cockpitColors["white"];
  };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  bgVid.onended = function() {
    //progress to next sequence
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

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "visible";
  button[1].style.visibility = "visible";
  button[2].style.visibility = "visible";
  button[3].style.visibility = "hidden";

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.backgroundColor = buttonColors['purple'];
    b[i].onmouseover = function(){
      b[i].style.backgroundColor = buttonColors['purpleHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.backgroundColor = buttonColors['purple'];
    };
  };


  //~~~~~~~~set functionality of buttons~~~~~~~~
    //button1: RAISE VOLUME
  button1.onclick = function(){
    holoVid.volume = holoVid.volume + .2;
  };
    //button2: LOWER VOLUME
  button2.onclick = function(){
      holoVid.volume = holoVid.volume - .2;
    };
    //button3 SKIP TO NEXT SEQUENCE
  button3.onclick = function(){
      border();
    };

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVid.src = backgroundVideoArray[1];
  bgVid.loop = true;
  bgVid.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["purple"];
  //play the appropriate video on the holo-console
  holoVid.src = hologramVideoArray[1];
  holoVid.play();

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    //hide the cockpit buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
    //set the cockpit hologram orb color back to white
    cockColor.src = cockpitColors["white"];
    border();
    };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //border();
  //   };
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~PART 2: BORDERLINE CRIMINAL~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function border(){
  timelineIndex++
  console.log(timelineArray[timelineIndex]);

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "visible";
  button[1].style.visibility = "visible";
  button[2].style.visibility = "visible";
  button[3].style.visibility = "visible";

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.backgroundColor = buttonColors['green'];
    b[i].onmouseover = function(){
      b[i].style.backgroundColor = buttonColors['greenHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.backgroundColor = buttonColors['green'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
    //button1 NEED TO CHANGE THIS
    button1.onclick = function(){
    holoVid.src = hologramVideoArray[2];
    holoVid.play();;
  };
    //button2
    button2.onclick = amazonJourney();

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVid.src = backgroundVideoArray[2];
  bgVid.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["green"];
  //~~~~~~~~set and play the appropriate video on the holo-console~~~~~~~~
  holoVid.src = hologramVideoArray[2];
  //holoVid.loop = true;
  holoVid.play();

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  // holoVid.onended = function() {
  // //set the cockpit hologram orb color back to white
  // cockColor.src = cockpitColors["white"];
  // };
  //check when background video is done playing
  // bgVid.onended = function() {
  //   //border();
  //   };
}

//opens a new window with the planet amazon
//
function amazonJourney(){
  window.open("https://thearlman.github.io/Asa_Perlman-Cart_253_Fall_2019/Projects/project2",
          "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
}



//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  //console.log("moved");
  getAudioContext().resume()
}
