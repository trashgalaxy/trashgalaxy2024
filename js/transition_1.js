//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Transition 1: STAR MAN~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function trans1(){
  //set state
  timeline = "trans1";
  //pull the appropriate videos for the sequence
  let holoVid = videoArray[2];
  let bgVid = videoArray[3];




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
    //button0: RAISE VOLUME
  button[0].innerHTML = "";
  button[0].onclick = function(){
  };
    //button1: LOWER VOLUME
  button[1].innerHTML = "";
  button[1].onclick = function(){
      //holoVid.volume = holoVid.volume - .2;
    };
    //button2 SKIP TO NEXT SEQUENCE
  button[2].innerHTML = "JumpAhead";
  button[2].onclick = function(){
    if (timeline === "trans1"){
      transitionForward();
      }
    };
    //button3 SKIP TO PREVIOUS
  button[3].innerHTML = "JumpBack";
  button[3].onclick = function(){
    if (timeline === "trans1"){
      transitionBackward();
      };
    };
    //button 4 toggle menu
    button[4].innerHTML = ">>";
    button[4].onclick = function(){
      console.log(menuState);
      if (timeline === "trans1"){
        activeButtons = [3,2];
        menuToggle(activeButtons, undefined, undefined, undefined, undefined);
        };
      };
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
      border();
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //called by button
    function transitionBackward() {
      //remove the video from the holo container
      clearHoloCont();
      //hide the hologram buttons
      for (let i = 0; i < button.length; i++){
        button[i].style.visibility = "hidden";
        };
      //remove video from bg container
      clearBgCont();
      //call next screen
      leavingEarth();
    };


  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVid);
  bgVidCont.childNodes[0].currentTime = 0;
  bgVid.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["purple"];

  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  holoVidCont.appendChild(holoVid);
  holoVidCont.childNodes[0].currentTime = 0;
  holoVid.play();

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "hidden";
  button[1].style.visibility = "hidden";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "hidden";
  button[4].style.visibility = "visible";
  menuState = "closed";

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
    transitionForward();
    };
}
