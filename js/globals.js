//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timeline;

let menuState = "closed"
let menuVideo = false;

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
let cockpitColors = {
  "blue": 'images/cockpits/Cockpit_Blue.png',
  "green": 'images/cockpits/Cockpit_Green.png',
  "purple": 'images/cockpits/Cockpit_Purple.png',
  "red": 'images/cockpits/Cockpit_Red.png',
  "green": 'images/cockpits/Cockpit_Green.png',
  "white": 'images/cockpits/Cockpit_White.png'
};

let buttonColors = {
  "blue": "rgba(0,0,255,.5)",
  "blueHover": "rgba(0,0,255,.3)",

  "green": "rgba(0,255,0,.3)",
  "greenHover": "rgba(0,255,0,.7)",

  "purple": "rgba(195,82,221,.3)",
  "purpleHover": "rgba(195,82,221,.7)",

  "red": "rgba(255,0,0,.3)",
  "redHover": "rgba(255,0,0,.7)"
};

//holi-console buttons
let button = [document.getElementById('button0'),
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
  document.getElementById('button4')
];
let activeButtons;

//holo-console video
let holoVidCont = document.getElementById('hologramContent');

//cockpit color
let cockColor = document.getElementById('cockpitStyle');

//background video
let bgVidCont = document.getElementById('backgroundVideo');

function clearBgCont() {
  for (let i = 0; i < bgVidCont.childNodes.length; i++) {
    bgVidCont.removeChild(bgVidCont.childNodes[i]);
  }
}

function clearHoloCont() {
  for (let i = 0; i < holoVidCont.childNodes.length; i++) {
    holoVidCont.removeChild(holoVidCont.childNodes[i]);
  }
}

function menuToggle(activeButtons, holoVidCont, holoVid1, holoVid2, holoVid3) {
  if (menuState === "closed") {
    if (menuVideo === true) {
      clearHoloCont();
      holoVidCont.appendChild(holoVid1);
      holoVid1.play();
      holoVid1.onended = function() {
        clearHoloCont();
        holoVidCont.appendChild(holoVid2);
        holoVid2.loop = true;
        holoVid2.play();
        for (let i = 0; i < activeButtons.length; i++) {
          button[activeButtons[i]].style.visibility = "visible";
        }
      }
    } else if (menuVideo === false) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.visibility = "visible";
      }
    }
    button[4].innerHTML = "<<"
    menuState = "open";
  } else if (menuState === "open") {
    if (menuVideo === true) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.visibility = "hidden";
      }
      clearHoloCont();
      holoVidCont.appendChild(holoVid3);
      holoVid3.play();
      holoVid3.onended = function() {
        clearHoloCont();
      }
    } else if (menuVideo === false) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.visibility = "hidden";
      }
    }
    menuState = "closed";
    button[4].innerHTML = ">>";

  }
}

let creditsArray = {Google:"https://www.google.ca",
                    Facebook:"https://www.facebook.com",
                    Pinterest:"https://www.pinterest.ca",
                    Github:"https://github.com",
                    Twitter:"https://twitter.com"};
  let creditIndex = 0;



// let name = Object.keys(creditsArray)[0];
// console.log(name);
// let url =  Object.values(creditsArray)[0];
// console.log(url);
