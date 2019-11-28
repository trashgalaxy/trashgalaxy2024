//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~PART 1: LEAVING EARTH~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function leavingEarth(){

  //pull the appropriate videos for the sequence
  let holoVid = videoArray[0];
  let bgVid = videoArray[1];
  // window.mediaDevices.getUserMedia({
  //   audio: true,
  //   video: true
  // })
  timelineIndex++
  console.log(timelineArray[timelineIndex]);
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "hidden";
  button[1].style.visibility = "hidden";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "visible";
  button[4].style.visibility = "visible";

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

    };

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVid);
  bgVid.play();

  //set the cockpit hologram orb colors
  cockColor.src = cockpitColors["blue"];

  //~~~~~~~~set and play the appropriate video on the holo-console~~~~~~~~
  //
  holoVidCont.appendChild(holoVid);
  holoVid.play();
  //hologramVideoArray[0].remove();

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    //remove the video from the container
    holoVidCont.removeChild(holoVidCont.childNodes[0]);
  //hide the cockpit buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
  //set the cockpit hologram orb color back to white
  cockColor.src = cockpitColors["white"];
  };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  bgVid.onended = function() {
    //remove the video from the container
    bgVidCont.removeChild(bgVidCont.childNodes[0]);
    //progress to next sequence
    trans1();
    };
}
