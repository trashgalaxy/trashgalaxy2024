//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered


//=======================//
//    need to fix This
//=======================//
//
function mouseMoved() {
  console.log("moved");
  getAudioContext().resume()
}


//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let video1 = 'assets/videos/video1.webm';

//~~~~~load sounds into the variables~~~~~~
hoverSound.src = 'assets/sounds/tick.mp3';


//~~~~~Image Variables~~~~~~//
let bgImages = ['assets/images/liftOff.jpg',
                'assets/images/spaceBorder.jpg',
                'assets/images/planetAmazon.jpg'];
let bgImage = 0;

let cockpitImages = ['assets/images/cockpits/Cockpit_Blue.png',
                    'assets/images/cockpits/Cockpit_Green.png',
                    'assets/images/cockpits/Cockpit_Purple.png',
                    'assets/images/cockpits/Cockpit_Red.png',
                    'assets/images/cockpits/Cockpit_White.png',];
let cockpitImage = 0;



//=======================//
//      changeBG
//=======================//
//
//Changes the background image on call, by cycling through the background
// image array
function changeBG(button){
  // let thebutton = button;
  // console.log(thebutton);
  console.log(button);
   let bg = document.getElementById('background').style.background =
          'url('+bgImages[bgImage]+') no-repeat center top';
   bg = document.getElementById('background').style.backgroundSize = 'cover';
   bgImage++
   //if we have reached the end of the array of background images, start from
   //the beginning again
   if (bgImage >= bgImages.length){
     bgImage = 0;
   }
}


function changeCockpit(button){
  // let thebutton = button;
  // console.log(thebutton);
  console.log(button);
   let bg = document.getElementById('cockpit').src = cockpitImages[cockpitImage];
   cockpitImage++
   //if we have reached the end of the array of background images, start from
   //the beginning again
   if (cockpitImage >= cockpitImages.length){
     cockpitImage = 0;
   }
}
