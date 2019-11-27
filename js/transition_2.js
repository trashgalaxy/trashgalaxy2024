//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Transition 2: theManWo~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function trans2(){

  //pull the appropriate videos for the sequence
  let holoVid = videoArray[8];
  let bgVid = videoArray[9];

  timelineIndex++
  console.log(timelineArray[timelineIndex]);

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "visible";
  button[1].style.visibility = "visible";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "hidden";

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
      border();
    };
    //button3 RETURN TO PREVIOUS SEQUENCE
  button[3].onclick = function(){
      leavingEarth();
    };

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVid);
  bgVid.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["green"];

  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  holoVidCont.appendChild(holoVid);
  holoVid.play();

  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  holoVid.onended = function() {
    //remove the video from the container
    holoVidCont.removeChild(holoVidCont.childNodes[0]);
    //remove bgVid
    bgVidCont.removeChild(bgVidCont.childNodes[0]);
    //hide the cockpit buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
    //set the cockpit hologram orb color back to white
    cockColor.src = cockpitColors["white"];
    leavingEarth();
    };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //remove the video from the container
  //   bgVidCont.removeChild(bgVidCont.childNodes[0]);
  //   border();
  //   //advance to next sequence
  //   border();
  //   };
}
