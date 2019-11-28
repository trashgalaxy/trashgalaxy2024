//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~earth Museum~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function earthMuseum(){
  //hide the splash screen
  // let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  // let enterButton = document.getElementById('enterButton').style.visibility = "hidden";

  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[11];
  let holoVid2 = videoArray[11];
  let holoVid3 = videoArray[12];

  let bgVidLoop = videoArray[13];
  let bgVid1 = videoArray[14];
  let bgVid2 = videoArray[15];
  let bgVid3 = videoArray[16];

  timelineIndex++
  console.log(timelineArray[timelineIndex]);

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "visible";
  button[1].style.visibility = "visible";
  button[2].style.visibility = "visible";
  button[3].style.visibility = "visible";
  button[4].style.visibility = "visible";

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
    //button0 Plays the first film at the drive in
  button[0].onclick = function(){
  console.log('button0');
  //remove video from bg container
  bgVidCont.removeChild(bgVidCont.childNodes[0]);
  bgVidCont.appendChild(bgVid1);
  bgVid1.play();

  };
  //button0 Plays the second film at the drive in
  button[1].onclick = function(){
  console.log('button1');
  bgVidCont.removeChild(bgVidCont.childNodes[0]);
  bgVidCont.appendChild(bgVid2);
  bgVid2.play();
    };
  //button2 button0 Plays the third film at the drive in
  button[2].onclick = function(){
  console.log('button2');
  bgVidCont.removeChild(bgVidCont.childNodes[0]);
  bgVidCont.appendChild(bgVid3);
  bgVid3.play();
  };
  //button3 toggles the holi-display
  let menustate = "on";
  button[3].onclick = function(){
  console.log('button3');
  if (menustate === "on"){
    holoVidCont.removeChild(holoVidCont.childNodes[0]);
    holoVidCont.appendChild(holoVid3);
    holoVid3.play();
    menustate = "off";
  } else if (menustate === "off"){
        cockColor.src = cockpitColors["green"];
    holoVidCont.appendChild(holoVid2);
    holoVid2.play();
    menustate = "on";
  }
  };
  //button4 moves on to the next screen
  button[4].onclick = function(){
  console.log('button4');
  transition();
  };

    //~~~~~~~~set and play the appropriate background video~~~~~~~~
    bgVidCont.appendChild(bgVidLoop);
    bgVidLoop.play();

    //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
    cockColor.src = cockpitColors["green"];

    ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
    holoVidCont.appendChild(holoVid1);
    holoVid1.play();

      //~~~~~~~~When first vide ends~~~~~~~~
      holoVid1.onended = function() {
        //remove the video from the container
        holoVidCont.removeChild(holoVidCont.childNodes[0]);
        //play next holo vid
        holoVidCont.appendChild(holoVid2);
        holoVid2.loop = true;
        holoVid2.play();
        //show the hologram buttons
        button[1].style.visibility = "visible";
        button[3].style.visibility = "visible";
      };

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //called by button
        let leaving = false;
        function transition() {
        leaving = true;
        //hide the hologram buttons
        button[1].style.visibility = "hidden";
        button[3].style.visibility = "hidden";
        //remove the video from the holo container
        holoVidCont.removeChild(holoVidCont.childNodes[0]);
        //remove video from bg container
        bgVidCont.removeChild(bgVidCont.childNodes[0]);
        //play next holo vid
        holoVidCont.appendChild(holoVid3);
        holoVid3.play();
      };
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      holoVid3.onended = function() {
      //remove the video from the holo container
      holoVidCont.removeChild(holoVidCont.childNodes[0]);
      //set the cockpit hologram orb color back to white
      cockColor.src = cockpitColors["white"];
        if (leaving === true){
          border();
        };
      };

  // ~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //bgVidCont.removeChild(bgVidCont.childNodes[0]);
  //   //border();
  //   };
}
