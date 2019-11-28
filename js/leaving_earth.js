//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~PART 1: LEAVING EARTH~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function leavingEarth(){
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";
  //set timeline
  timeline = "leavingEarth";
  //pull the appropriate videos for the sequence
  let holoVid = videoArray[0];
  let bgVid = videoArray[1];

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
    //button0:
    button[0].onclick = function(){

  };
    //button1:
    button[1].onclick = function(){

    };
    //button2:
    button[2].onclick = function(){

    };

    //button3:
    button[3].onclick = function(){

    };
    //button3:
    button[4].onclick = function(){
      if(timeline = "leaving earth")
      transitionForward();
    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //called by button
    function transitionForward() {
      //remove the video from the holo container
      clearHoloCont();
      //hide the hologram buttons
      for (let i = 0; i < button.length; i++){
        button[i].style.visibility = "hidden";
      };
      //remove video from bg container
      clearBgCont();
      //call next screen
      trans1();
    }
  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVid);
  bgVidCont.childNodes[0].currentTime = 0;
  bgVid.play();

  //set the cockpit hologram orb colors
  cockColor.src = cockpitColors["blue"];

  //~~~~~~~~set and play the appropriate video on the holo-console~~~~~~~~
  //
  holoVidCont.appendChild(holoVid);
  holoVidCont.childNodes[0].currentTime = 0;
  holoVid.play();

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "hidden";
  button[1].style.visibility = "hidden";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "hidden";
  button[4].style.visibility = "visible";

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {

  };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  bgVid.onended = function() {
    //progress to next sequence
    trans1();
    };
}
