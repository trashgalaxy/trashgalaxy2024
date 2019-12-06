//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Final Sequence~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function finalSequence() {
  //set state
  timeline = "finalSequence";
  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[17];
  let holoVid2 = videoArray[18];
  let holoVid3 = videoArray[19];
  let holoVid4 = videoArray[20];

  let bgVid = videoArray[21];


  //~~~~~~~~set the hologram buttons colors~~~~~~~~
  let b = document.getElementsByClassName('buttons');
  for (let i = 0; i < b.length; i++) {
    b[i].style.color = buttonColors['red'];
    b[i].onmouseover = function() {
      b[i].style.color = buttonColors['redHover'];
      hoverSound.play();
    };
    b[i].onmouseout = function() {
      b[i].style.color = buttonColors['red'];
    };
  };

  //~~~~~~~~set functionality of buttons~~~~~~~~
  //button0:
  button[0].innerHTML = "";
  button[0].onclick = function() {};
  //button1:
  let paused = false;
  button[1].innerHTML = "Pause Journey ||";
  button[1].onclick = function(){
    if (timeline === "finalSequence"){
      if (!paused){
        holoVidCont.childNodes[0].pause();
        bgVidCont.childNodes[0].pause();
        button[1].innerHTML = "Resume Journey |>";
        paused = true;
      } else if (paused){
        holoVidCont.childNodes[0].play();
        bgVidCont.childNodes[0].play();
        button[1].innerHTML = "Pause Journey ||";
        paused = false;
      }
    }
  };
  //button2 SKIP TO NEXT SEQUENCE
  button[2].innerHTML = "Just roll the credits already!";
  button[2].onclick = function() {
    if (timeline === "finalSequence") {
      hideButtons();
      bgVidCont.childNodes[0].currentTime = 64;
      holoVidCont.childNodes[0].currentTime = 64;
    }
  };

  //button3 SKIP TO PREVIOUS
  button[3].innerHTML = "Jump Back <<";
  button[3].onclick = function() {
    if (timeline === "finalSequence") {
      transitionBackward();
    };
  };
  //button 4 toggle menu
  button[4].innerHTML = "|||";
  menuVideo = false;
  button[4].onclick = function() {
    console.log(menuState);
    if (timeline === "finalSequence") {
      activeButtons = [1, 2, 3];
      menuToggle(activeButtons, undefined, undefined, undefined, undefined);
    };
  };
  //called by button
  function transitionForward() {
    //remove the video from the holo container
    clearHoloCont();
    //hide the hologram buttons
    hideButtons();
    //remove video from bg container
    clearBgCont();
    //call next screen
    border();
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //called by button
  function transitionBackward() {
    //hide the hologram buttons
    hideButtons();
    //remove the video from the holo container
    clearHoloCont();
    //remove video from bg container
    clearBgCont();
    //call next screen
    earthMuseum();
  };


  //~~~~~~~~set and play the appropriate background video~~~~~~~~
  bgVidCont.appendChild(bgVid);
  bgVidCont.childNodes[0].currentTime = 0;
  bgVid.play();

  //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
  cockColor.src = cockpitColors["red"];

  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  clearHoloCont();
  holoVidCont.appendChild(holoVid1);
  holoVidCont.childNodes[0].currentTime = 0;
  holoVid1.play();
  //start timer to check for credit timing
  let creditsTrigger = setInterval(playCreditsTimer, 10);
  //when first holovid ends, hide buttons, change cockpit back to white
  holoVid1.onended = function() {
    clearHoloCont();
    hideButtons();
    cockColor.src = cockpitColors["white"];
  }

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[4].style.opacity = "1";
  button[4].style.pointerEvents = "auto";
  menuState = "closed";

  function playCreditsTimer() {
    if (bgVidCont.childNodes[0].currentTime >= 87) {
      //switch off the timer
      clearInterval(creditsTrigger);
      //hide the cockpit
      cockColor.style.visibility = "hidden";
      //remove any stray hologram videos
      clearHoloCont();
      holoVidCont.appendChild(holoVid2);
      holoVid2.play();
      //make all buttons blue
      let b = document.getElementsByClassName('buttons');
      for (let i = 0; i < b.length; i++) {
        b[i].style.color = buttonColors['blue'];
        b[i].onmouseover = function() {
          b[i].style.color = buttonColors['blueHover'];
          hoverSound.play();
        };
        b[i].onmouseout = function() {
          b[i].style.color = buttonColors['blue'];
        };
      };
      let creditsRoller = setInterval(rollCredits, 15000);
      rollCredits();
    }
    console.log("sup dogg");
  }

  function rollCredits() {
    let credit0 = Object.keys(creditsArray)[creditIndex];
    button[0].innerHTML = credit0;
    button[0].onclick = function() {
      window.open(creditsArray[credit0],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
    }
    console.log(creditsArray[credit0])
    creditIndex++;
    let credit1 = Object.keys(creditsArray)[creditIndex];
    button[1].innerHTML = credit1;
    button[1].onclick = function() {
      window.open(creditsArray[credit1],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
    }
    console.log(creditsArray[credit1]);
    creditIndex++;
    let credit2 = Object.keys(creditsArray)[creditIndex];
    button[2].innerHTML = credit2;
    button[2].onclick = function() {
      window.open(creditsArray[credit2],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
    }
    console.log(creditsArray[credit2]);
    creditIndex++;
    let credit3 = Object.keys(creditsArray)[creditIndex];
    button[3].innerHTML = credit3;
    button[3].onclick = function() {
      window.open(creditsArray[credit3],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
    }
    console.log(creditsArray[credit3]);
    creditIndex++;
    let credit4 = Object.keys(creditsArray)[creditIndex];
    button[4].innerHTML = credit4;
    button[4].onclick = function() {
      window.open(creditsArray[credit4],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
    }
    console.log(creditsArray[credit4]);
    creditIndex++;
  }

  holoVid2.onended = function() {
    clearHoloCont();
    holoVidCont.appendChild(holoVid3);
    holoVid3.loop = true;
    holoVid3.play();
    setTimeout(function(){
      for (let i = 0; i < button.length; i++) {
        button[i].style.opacity = "1";
        button[i].style.pointerEvents = "auto";
      };
    }, 1000);
  }


  //~~~~~~~~check when hologram video is done playing~~~~~~~~
  // holoVid.onended = function() {
  //   clearHoloCont();
  //   holoVidCont.appendChild(holoVid2);
  //   holoVidCont.childNodes[0].currentTime = 0;
  //   holoVid2.play();
  //   };
  //set the cockpit hologram orb color back to white
  // cockColor.src = cockpitColors["white"];



  //~~~~~~~~check when background video is done playing~~~~~~~~
  bgVid.onended = function() {
    clearHoloCont();
    holoVidCont.appendChild(holoVid4);
    holoVid4.play()
    holoVid4.onended = function(){
      clearHoloCont();
      hideButtons();
      let goHomeButton = document.getElementById('homeButton');
      goHomeButton.style.visibility = "visible";
    }
  };
}
