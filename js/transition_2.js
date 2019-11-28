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
    //button0: RAISE VOLUME
  button[0].onclick = function(){
    holoVid.volume = holoVid.volume + .2;
  };
    //button1: LOWER VOLUME
  button[1].onclick = function(){
      holoVid.volume = holoVid.volume - .2;
    };
    //button2 SKIP TO NEXT SEQUENCE
  button[2].onclick = function(){

    };
  button[3].onclick = function(){
    if (timeline === "trans2"){
      transitionForward();
      };
    };
  button[4].onclick = function(){
    if (timeline === "trans2"){
      transitionBackward();
      };
    };

    //called by button
    function transitionForward() {
      //remove the video from the holo container
      holoVidCont.removeChild(holoVidCont.childNodes[0]);
      //hide the hologram buttons
      for (let i = 0; i < button.length; i++){
        button[i].style.visibility = "hidden";
        };
      //remove video from bg container
      clearBgCont();
      //call next screen
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
    button[0].style.visibility = "hidden";
    button[1].style.visibility = "hidden";
    button[2].style.visibility = "hidden";
    button[3].style.visibility = "visible";
    button[4].style.visibility = "visible";

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    //remove the video from the container
    holoVidCont.removeChild(holoVidCont.childNodes[0]);
    //remove bgVid
    clearBgCont();
    //hide the cockpit buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
    //set the cockpit hologram orb color back to white
    cockColor.src = cockpitColors["white"];
    earthMuseum();
    };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //remove the video from the container
  //   clearBgCont();
  //   border();
  //   //advance to next sequence
  //   border();
  //   };
}
