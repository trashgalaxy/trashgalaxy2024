//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Transition 1: STAR MAN~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function trans1(){

  //pull the appropriate videos for the sequence
  let holoVid = videoArray[2];
  let bgVid = videoArray[3];

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
  cockColor.src = cockpitColors["purple"];

  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  holoVidCont.appendChild(holoVid);
  holoVid.play();

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
    border();
    //advance to next sequence
    border();
    };
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~PART 2: BORDERLINE CRIMINAL~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function border(){

  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[4];
  let holoVid2 = videoArray[5];
  let holoVid3 = videoArray[6];

  let bgVid = videoArray[7];

  timelineIndex++
  console.log(timelineArray[timelineIndex]);

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "hidden";
  button[1].style.visibility = "hidden";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "hidden";

  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++){
    b[i].style.backgroundColor = buttonColors['red'];
    b[i].onmouseover = function(){
      b[i].style.backgroundColor = buttonColors['redHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function(){
      b[i].style.backgroundColor = buttonColors['red'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
    //button0 TBD
  button[0].onclick = function(){
  console.log('button0');
  };
  //button1 TBD
  button[1].onclick = function(){
  console.log('button1');
  transition();
    };
  //button2 OPEN JOURNEY TO PLANET AMAZON GAME
  button[2].onclick = function(){
  console.log('button2');
  };
  //button3 TBD
  button[3].onclick = function(){
  console.log('button3');
  window.open("https://thearlman.github.io/Asa_Perlman-Cart_253_Fall_2019/Projects/Project3",
          "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
  };

    //~~~~~~~~set and play the appropriate background video~~~~~~~~
    bgVidCont.appendChild(bgVid);
    bgVid.play();

    //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
    cockColor.src = cockpitColors["red"];

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
        function transition() {
        //hide the hologram buttons
        button[1].style.visibility = "hidden";
        button[3].style.visibility = "hidden";
        //remove the video from the container
        holoVidCont.removeChild(holoVidCont.childNodes[0]);
        //play next holo vid
        holoVidCont.appendChild(holoVid3);
        holoVid3.play();
      };
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      holoVid3.onended = function() {
      //remove the video from the container
      holoVidCont.removeChild(holoVidCont.childNodes[0]);
      //set the cockpit hologram orb color back to white
      cockColor.src = cockpitColors["white"];
      leavingEarth();
      };

  //~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //bgVidCont.removeChild(bgVidCont.childNodes[0]);
  //   //border();
  //   };
}
