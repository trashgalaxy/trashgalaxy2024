//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered

//~~~~Current stage in the game~~~~
let timeline;

let menuState = "closed"
let menuVideo = false;

//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let welcomeCitizen = new Audio();
//~~~~~load sounds into the variables  (for HTML)~~~~~~//
hoverSound.src = 'sounds/tick.mp3';
welcomeCitizen.src = 'sounds/Welcome_Citizen.wav';

//~~~~~Background Video Variables~~~~~~//
let videoArray = [];
let videoIndex = 0;


// stores the local urls to the different cockpit orb colors
let cockpitColors = {
  "blue": 'images/cockpits/Cockpit_Blue.png',
  "green": 'images/cockpits/Cockpit_Green.png',
  "purple": 'images/cockpits/Cockpit_Purple.png',
  "red": 'images/cockpits/Cockpit_Red.png',
  "green": 'images/cockpits/Cockpit_Green.png',
  "white": 'images/cockpits/Cockpit_White.png'
};

// stores the color values for the buttons
let buttonColors = {
  "blue": "rgba(0,0,255,.4)",
  "blueHover": "rgba(0,0,255,.2)",

  "green": "rgba(0,255,0,.4)",
  "greenHover": "rgba(0,255,0,.2)",

  "purple": "rgba(195,82,221,.6)",
  "purpleHover": "rgba(195,82,221,.2)",

  "red": "rgba(255,0,0,.4)",
  "redHover": "rgba(255,0,0,.2)"
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

// clears all content from the background video container
function clearBgCont() {
  for (let i = 0; i < bgVidCont.childNodes.length; i++) {
    bgVidCont.removeChild(bgVidCont.childNodes[i]);
  }
}

// clears all content from the holigram video container
function clearHoloCont() {
  for (let i = 0; i < holoVidCont.childNodes.length; i++) {
    holoVidCont.removeChild(holoVidCont.childNodes[i]);
  }
}

//hides all the holi-console buttons
function hideButtons() {
  for (let i = 0; i < button.length; i++) {
    button[i].style.opacity = "0";
    button[i].style.pointerEvents = "none";
  };
}

function showButtons() {
  for (let i = 0; i < button.length; i++) {
    button[i].style.opacity = "1";
    button[i].style.pointerEvents = "auto";
  };
}

//deals with the opening and closing of the holi-console buttons.
// takes videos as arguments for when the opening and closing is animated
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
          button[activeButtons[i]].style.opacity = "1";
          button[activeButtons[i]].style.pointerEvents = "auto";
        }
      }
    } else if (menuVideo === false) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.opacity = "1";
        button[activeButtons[i]].style.pointerEvents = "auto";
      }
    }
    button[4].innerHTML = "|_____|"
    menuState = "open";
  } else if (menuState === "open") {
    if (menuVideo === true) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.opacity = "0";
        button[activeButtons[i]].style.pointerEvents = "none";
      }
      clearHoloCont();
      holoVidCont.appendChild(holoVid3);
      holoVid3.play();
      holoVid3.onended = function() {
        clearHoloCont();
      }
    } else if (menuVideo === false) {
      for (let i = 0; i < activeButtons.length; i++) {
        button[activeButtons[i]].style.opacity = "0";
        button[activeButtons[i]].style.pointerEvents = "none";

      }
    }
    menuState = "closed";
    button[4].innerHTML = "|||";

  }
  console.log(menuState);
}
//get users location
function annoyUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  let d = new Date();
  //console.log(position.coords.latitude);
  alert("Please Verify: \n" +
    d +
    "\nLatitude: " + position.coords.latitude +
    "\nLongitude: " + position.coords.longitude);
}
function annoyUserCamera(){
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
  }
}
// holds all of the credits and their urls
let creditsArray = {
  "TRASH GALAXY 2024": "https://www.github.com/trashgalaxy",
  "~~~~~~~~~~~~~~~~~~": "https://www.github.com/trashgalaxy",
  "By: Asa Perlman": "https://thearlman.github.io/dart349-1/asa_perlman/",
  "By: Gabriel Dubras": "https://hybrid.concordia.ca/g_dupras/dart349/",
  "RIP Bowie": "https://www.youtube.com/watch?v=m5zxeLwUSdk",
  "Mad Max Fury Road": "https://www.imdb.com/title/tt1392190/",
  "SpaceX Starship": "https://techcrunch.com/2019/11/06/elon-musk-says-spacexs-starship-could-fly-for-as-little-as-2-million-per-launch/",
  "Amazon Van": "https://www.theverge.com/2019/9/19/20873947/amazon-electric-delivery-van-rivian-jeff-bezos-order",
  "Bud Can": "https://thedieline.com/blog/2013/4/23/budweisers-bowtie-shape-can.html",
  "Movieland Arcade Neon Sign": "https://commons.wikimedia.org/wiki/File:MOVIELAND_ARCADE_(4545907667).jpg",
  "Coca Cola": "https://s.ecrater.com/stores/10724/4b09d22abca36_10724b.jpg",
  "Mars": "https://science.howstuffworks.com/methane-spike-mars.htm",
  "Cybertruck": "https://www.motortrend.com/news/tesla-cybertruck-electric-pickup-stealth-fighter-mars-rover/",
  "Sam Finger": "http://theboxingtribune.com/uncle-sam-middle-finger/",
  "Astronaut": "https://en.wikipedia.org/wiki/Canadarm#/media/File:Wisoff_on_the_Arm_-_GPN-2000-001069.jpg",
  "Canadarm": "http://www.fanpop.com/clubs/space/images/8071588/title/earth-space-wallpaper",
  "Space Shuttle": "https://www.nasa.gov/centers/armstrong/history/where_are_they_now/Enterprise_Prototype.html",
  "ISS": "https://www.nasa.gov/mission_pages/station/structure/elements/space-station-assembly",
  "Space X Dragon": "https://en.wikipedia.org/wiki/SpaceX_CRS-4#/media/File:SpaceX_CRS-4_Dragon.jpg",
  "Space Concordia - Supersonice": "https://twitter.com/incmmnsrbl",
  "Boston Dynamics - Atlas": "https://www.bostondynamics.com/atlas",
  "Boston Dynamics - Spot": "https://techcrunch.com/2018/11/28/youbionic-adds-creepy-hands-to-spotmini-the-creepy-robot-dog/",
  "Boston Dynamics - Big Dog": "https://www.youtube.com/watch?v=xqMVg5ixhd0",
  "Black Mirror - Robot Dog": "https://m.diary.ru/~jkbunny/p214886222.htm",
  "SpaceX Sign": "http://cdn.c.photoshelter.com/img-get/I0000CLSU19QXCRI/s/750/750/SpaceX-Falcon-9-Dragon-028.jpg",
  "Argentina Oil Wells": "https://www.ft.com/content/96f02a12-580b-11e6-9f70-badea1b336d4",
  "Apple Campus 2": "https://9to5mac.com/2018/01/17/apple-antitrust-regulation/"
};
//curren credit being puled from list
let creditIndex = 0;
