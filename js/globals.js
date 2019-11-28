//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timeline;

//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let marioSound = new Audio();
let welcomeCitizen = new Audio();
//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'sounds/tick.mp3';
marioSound.src = 'sounds/mario.mp3';
welcomeCitizen.src = 'sounds/Welcome_Citizen.wav';

//~~~~~Background Video Variables~~~~~~//
let videoArray = [];
let videoIndex = 0;



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
  let button = [document.getElementById('button0'),
                document.getElementById('button1'),
                document.getElementById('button2'),
                document.getElementById('button3'),
                document.getElementById('button4')];

  let numOfButtons = 4;

  //holo-console video
  let holoVidCont = document.getElementById('hologramContent');

  //cockpit color
  let cockColor = document.getElementById('cockpitStyle');

  //background video
  let bgVidCont = document.getElementById('backgroundVideo');

  function clearBgCont(){
    for(let i = 0; i < bgVidCont.childNodes.length; i++){
     bgVidCont.removeChild(bgVidCont.childNodes[i]);
    }
  }

  function clearHoloCont(){
    for(let i = 0; i < holoVidCont.childNodes.length; i++){
     holoVidCont.removeChild(holoVidCont.childNodes[i]);
    }
  }
