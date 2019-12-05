//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~PART 1: LEAVING EARTH~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function leavingEarth(){
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";
  let loadingAnimation1 = document.getElementById('loadingAnim').style.visibility = "hidden";
  let loadingAnimation2 = document.getElementById('loadingAnim2').style.visibility = "hidden";
  let loadingAnimation3 = document.getElementById('loadingAnim3').style.visibility = "hidden";

  //set timeline
  timeline = "leavingEarth";
  //pull the appropriate videos for the sequence
  let holoVid = videoArray[0];
  let bgVid = videoArray[1];

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.color = buttonColors['blue'];
    b[i].onmouseover = function(){
      b[i].style.color = buttonColors['blueHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.color = buttonColors['blue'];
    };
  };

  //~~~~~~~~set content and functionality  of buttons~~~~~~~~
    //button0:
    button[0].innerHTML = "";
    button[0].onclick = function(){

    };
    //button1:
    button[1].innerHTML = "";
    button[1].onclick = function(){

    };
    //button2:
    button[2].innerHTML = "";
    button[2].onclick = function(){

    };

    //button3:
    button[3].innerHTML = ">> jump forward";
    button[3].onclick = function(){
      //transitionForward();
      hideButtons();
      holoVidCont.childNodes[0].currentTime = 43;
      bgVidCont.childNodes[0].currentTime = 43;


    };

    //button4:
    button[4].innerHTML = ">>";
    button[4].onclick = function(){
      if (timeline = "leaving earth"){
        activeButtons = [3];
        menuToggle(activeButtons, undefined, undefined, undefined, undefined);
      };
    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //called by button
    function transitionForward() {
      //remove the video from the holo container
      clearHoloCont();
      //hide the hologram buttons
      hideButtons();
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
  button[4].style.opacity = "1";
  button[4].style.pointerEvents = "auto";
  menuState = "closed";

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    clearHoloCont();
    //hide the hologram buttons
    hideButtons();
    //set the cockpit hologram orb colors
    cockColor.src = cockpitColors["white"];
  };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  bgVid.onended = function() {
    clearBgCont();
    //progress to next sequence
    trans1();
    };
}
