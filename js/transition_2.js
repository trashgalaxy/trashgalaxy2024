//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Transition 2: theManWo~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function trans2(){
  //define state
  timeline = "trans2";
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";
  //pull the appropriate videos for the sequence
  let holoVid = videoArray[8];
  let bgVid = videoArray[9];

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.color = buttonColors['green'];
    b[i].onmouseover = function(){
      b[i].style.color = buttonColors['greenHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.color = buttonColors['green'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
    //button0:
  button[0].innerHTML = "";
  button[0].onclick = function(){
  };
    //button1:
  button[1].innerHTML = "";
  button[1].onclick = function(){
    };
    //button2
  button[2].innerHTML = "JumpAhead";
  button[2].onclick = function(){
    if (timeline === "trans2"){
    // transitionForward();
    hideButtons();
    holoVidCont.childNodes[0].currentTime = 66;
    bgVidCont.childNodes[0].currentTime = 66;
    };

    };
  button[3].innerHTML = "JumpBack";
  button[3].onclick = function(){
    if (timeline === "trans2"){
      transitionBackward();
      };
    };
  button[4].innerHTML = ">>";
  button[4].onclick = function(){
    if (timeline === "trans2"){
      activeButtons = [3, 2];
      menuToggle(activeButtons, undefined, undefined, undefined, undefined);
      };
    };

    //called by button
    function transitionForward() {
      //clear background container
      clearBgCont();
      //hide the cockpit buttons
      hideButtons();
      //clear hologram container
      clearHoloCont();
      //set the cockpit hologram orb color back to white
      cockColor.src = cockpitColors["white"];
      earthMuseum();
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //called by button
    function transitionBackward() {
      //remove the video from the holo container
      holoVidCont.removeChild(holoVidCont.childNodes[0]);
      //hide the hologram buttons
      for (let i = 0; i < button.length; i++){
        button[i].style.visibility = "hidden";
        };
      //remove video from bg container
      clearBgCont();
      //call next screen
      border();
    };


    //~~~~~~~~set and play the appropriate background video~~~~~~~~
    bgVidCont.appendChild(bgVid);
    bgVidCont.childNodes[0].currentTime = 0;
    bgVid.play();

    //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
    cockColor.src = cockpitColors["green"];

    ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
    holoVidCont.appendChild(holoVid);
    holoVidCont.childNodes[0].currentTime = 0;
    holoVid.play();

    //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
    button[4].style.opacity = "1";
    button[4].style.pointerEvents = "auto";
    menuState = "closed";

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    transitionForward();
    };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //
  //   };
}
