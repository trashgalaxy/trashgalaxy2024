//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~Final Sequence~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function finalSequence(){
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
  cockColor.src = cockpitColors["red"];

  ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
  clearHoloCont();
  holoVidCont.appendChild(holoVid1);
  holoVidCont.childNodes[0].currentTime = 0;
  holoVid1.play();
  let creditsTrigger = setInterval(playCreditsTimer, 1000);

  //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
  button[0].style.visibility = "hidden";
  button[1].style.visibility = "hidden";
  button[2].style.visibility = "hidden";
  button[3].style.visibility = "hidden";
  button[4].style.visibility = "visible";
  menuState = "closed";

  function playCreditsTimer(){
    if (bgVidCont.childNodes[0].currentTime > 87){
      console.log("hello!");
      clearHoloCont();
      holoVidCont.appendChild(holoVid2);
      holoVid2.play();
      clearInterval(creditsTrigger);

      for (let i = 0; i < button.length; i++){
        button[i].style.visibility = "visible";
        };
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
      let creditsRoller = setInterval(rollCredits, 180000);
      rollCredits();
    }
    console.log("sup dogg");
  }

  function rollCredits(){
    let credit0 = Object.keys(creditsArray)[creditIndex];
    button[0].innerHTML = credit0;
    button[0].onclick = function(){
        window.open(creditsArray[credit0],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
        }
        console.log(creditsArray[credit0])
    creditIndex++;
    let credit1 = Object.keys(creditsArray)[creditIndex];
    button[1].innerHTML = credit1;
    button[1].onclick = function(){
        window.open(creditsArray[credit1],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
        }
        console.log(creditsArray[credit1]);
    creditIndex++;
    let credit2 = Object.keys(creditsArray)[creditIndex];
    button[2].innerHTML = credit2;
    button[2].onclick = function(){
        window.open(creditsArray[credit2],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
        }
        console.log(creditsArray[credit2]);
    creditIndex++;
    let credit3 = Object.keys(creditsArray)[creditIndex];
    button[3].innerHTML = credit3;
    button[3].onclick = function(){
        window.open(creditsArray[credit3],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
        }
        console.log(creditsArray[credit3]);
    creditIndex++;
    let credit4 = Object.keys(creditsArray)[creditIndex];
    button[4].innerHTML = credit4;
    button[4].onclick = function(){
        window.open(creditsArray[credit4],
        "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500");
        }
        console.log(creditsArray[credit4]);
        creditIndex++;
    }

  holoVid2.onended = function(){
    clearHoloCont();
    holoVidCont.appendChild(holoVid3);
    holoVid3.loop = true;
    holoVid3.play();
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
    transitionForward();
    };
}
