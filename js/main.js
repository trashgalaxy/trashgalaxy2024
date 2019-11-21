//This is the main Javasript file for trashGalaxy2024.
//I hope it doens't get too cluttered


//~~~~~sound variables~~~~~~//
let hoverSound = new Audio();
let video1 = 'assets/videos/video1.webm';

//~~~~~load sounds into the variables~~~~~~
hoverSound.src = 'assets/sounds/tick.mp3';


function mouseMoved() {
  console.log("moved");
  getAudioContext().resume()

}

let bgImages = ['assets/images/liftOff.jpg', 'assets/images/spaceBorder.jpg', 'assets/images/planetAmazon.jpg']
let bgImage = 0;

function changeBG(){
   var bg = document.getElementById('cockpit').style.background = 'url('+bgImages[bgImage]+') no-repeat center bottom';
   bgImage++
   if (bgImage >= bgImages.length){
     bgImage = 0;
   }
}
