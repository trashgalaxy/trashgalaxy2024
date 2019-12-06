//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~earth Museum~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function earthMuseum() {
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";
  let loadingAnimation1 = document.getElementById('loadingAnim').style.visibility = "hidden";
  let loadingAnimation2 = document.getElementById('loadingAnim2').style.visibility = "hidden";
  let loadingAnimation3 = document.getElementById('loadingAnim3').style.visibility = "hidden";

  timeline = "earthMuseum";


  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[10];
  let holoVid2 = videoArray[11];
  let holoVid3 = videoArray[12];

  let bgVidLoop = videoArray[13];
  let museumVids = [videoArray[14], videoArray[15], videoArray[16]];
  let currentMuseumVid = 0;
  let museumVidTitle = ["Now Playing: <br> Earth's Primitive Rockets",
    "Now Playing: <br> Earth, The Early Years",
    "Now Playing: <br> Earth's Downfall"
  ];
  let currentMuseumVidTitle = 0;







  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++) {
    b[i].style.color = buttonColors['green'];
    b[i].style.textShadow = "1px 1px 2px rgba(127, 127, 127, .4), 0 0 1em rgba(127, 127, 127, .3), 0 0 0.2em rgba(127, 127, 127, .2)";
    b[i].onmouseover = function() {
      b[i].style.color = buttonColors['greenHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function() {
      b[i].style.color = buttonColors['green'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
  //button0 Plays the first film at the drive in
  button[0].style.pointerEvents = "none";
  button[0].innerHTML = "Welcome To The Midway To Mars <br> Earth Museum!";
  button[0].onclick = function() {
    if (timeline = "earthMuseum") {
    };
  };
  //button1Plays the second film at the drive in
  button[1].innerHTML = "Play Content |>";
  button[1].onclick = function() {
    if (timeline === "earthMuseum") {
      clearBgCont();
      button[1].innerHTML = "Next Video >>"
      button[0].innerHTML = museumVidTitle[currentMuseumVidTitle];
      bgVidCont.appendChild(museumVids[currentMuseumVid]);
      museumVids[currentMuseumVid].play();
      currentMuseumVid++;
      currentMuseumVidTitle++;
      if (currentMuseumVid >= museumVids.length) {
        currentMuseumVid = 0;
        currentMuseumVidTitle = 0;
      }
      museumVids[currentMuseumVid].onended = function(){
        clearBgCont();
        bgVidCont.appendChild(bgVidLoop);
        bgVidLoop.loop = true;
        bgVidLoop.play();
      }
    };
  };
  //button2 button0 Plays the third film at the drive in
  button[2].innerHTML = "GTF-OUTTA HERE";
  button[2].onclick = function() {
    if (timeline === "earthMuseum") {
      hideButtons();
      transitionForward();
    };
  };
  //button3 jump ahead
  button[3].innerHTML = "Jump Backward <<";
  button[3].onclick = function() {
    if (timeline === "earthMuseum") {
      transitionBackward();
    };
  };
  // menuToggle(activeButtons, holoVidCont, holoVid1, holoVid2, holoVid3);
  menuVideo = true;
  button[4].innerHTML = "|||";
  button[4].onclick = function() {
    if (timeline === "earthMuseum") {
      activeButtons = [0, 1, 2, 3];
      menuToggle(activeButtons, holoVidCont, holoVid1, holoVid2, holoVid3);
    };
  };

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //called by button
  function transitionForward() {
    //remove the video from the holo container
    clearHoloCont();
    //play closing holo vid
    holoVidCont.appendChild(holoVid3);
    holoVid3.play();
    holoVid3.onended = function(){
      //hide the hologram buttons
      hideButtons();
      //remove video from bg container
      clearBgCont();
      //call next screen
      finalSequence();
    }

  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //called by button
  function transitionBackward() {
    clearHoloCont();
    //play closing holo vid
    holoVidCont.appendChild(holoVid3);
    holoVid3.play();
    //hide the hologram buttons
    hideButtons();
    //remove video from bg container
    clearBgCont();
    //call next screen
    trans2();
  };

  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVidLoop);
  bgVidCont.childNodes[0].currentTime = 0;
  bgVidLoop.loop = true;
  bgVidLoop.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["green"];


  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  // holoVidCont.appendChild(holoVid1);
  // holoVidCont.childNodes[0].currentTime = 0;
  // holoVid1.play();

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[4].style.opacity = "1";
  button[4].style.pointerEvents = "auto";
  menuState = "closed";

  // //~~~~~~~~When first vide ends~~~~~~~~
  // holoVid1.onended = function() {
  //   //remove the video from the container
  //   clearHoloCont();
  //   //play next holo vid
  //   holoVidCont.appendChild(holoVid2);
  //   holoVid2.loop = true;
  //   holoVid2.play();
  //   //show the hologram buttons
  //   button[1].style.visibility = "visible";
  //   button[3].style.visibility = "visible";
  // };

  //~~~~~~~~~~~~~~~when third video ends~~~~~~~~~~~~~~~~~
  holoVid3.onended = function() {
    //remove the video from the holo container
    //clearHoloCont();
    //set the cockpit hologram orb color back to white
    //cockColor.src = cockpitColors["white"];
  };

  // ~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //clearBgCont();
  //   //border();
  //   };
}
