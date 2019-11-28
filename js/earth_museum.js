//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~earth Museum~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function earthMuseum(){
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";

  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[11];
  let holoVid2 = videoArray[11];
  let holoVid3 = videoArray[12];

  let bgVidLoop = videoArray[13];
  let bgVid1 = videoArray[14];
  let bgVid2 = videoArray[15];
  let bgVid3 = videoArray[16];

  timeline = "earthMuseum";



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
  clearBgCont();
  bgVidCont.appendChild(bgVid1);
  bgVid1.play();

  };
  //button0 Plays the second film at the drive in
  button[1].onclick = function(){
  console.log('button1');
  clearBgCont();
  bgVidCont.appendChild(bgVid2);
  bgVid2.play();
    };
  //button2 button0 Plays the third film at the drive in
  button[2].onclick = function(){
  console.log('button2');
  clearBgCont();
  bgVidCont.appendChild(bgVid3);
  bgVid3.play();
  };
  //button3 toggles the holi-display
  let menustate = "on";
  button[3].onclick = function(){
  console.log('button3');
  // if (menustate === "on"){
  //   clearHoloCont();
  //   holoVidCont.appendChild(holoVid3);
  //   holoVid3.play();
  //   menustate = "off";
  // } else if (menustate === "off"){
  //   holoVidCont.appendChild(holoVid2);
  //   holoVid2.play();
  //   menustate = "on";
  // }
  transitionForward();
  };
  //button4 moves on to the next screen
  button[4].onclick = function(){
  console.log('button4');
  transitionBackward();
  };

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //called by button
  function transitionForward() {
    if (menustate === "on"){
      //remove the video from the holo container
      clearHoloCont();
      //play closing holo vid
      holoVidCont.appendChild(holoVid3);
      holoVid3.play();
    };
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
    if (menustate === "on"){
      //remove the video from the holo container
      clearHoloCont();
      //play closing holo vid
      holoVidCont.appendChild(holoVid3);
      holoVid3.play();
    };
    //hide the hologram buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
  //remove video from bg container
  clearBgCont();
  //call next screen
  trans2();
  };

    //~~~~~~~~set and play the appropriate background video~~~~~~~~
    bgVidCont.appendChild(bgVidLoop);
    bgVidCont.childNodes[0].currentTime = 0;
    bgVidLoop.play();

    //~~~~~~~~set the cockpit hologram orb colors~~~~~~~~
    cockColor.src = cockpitColors["green"];


    ///~~~~~~~~/play the appropriate video on the holo-console//~~~~~~~~
    holoVidCont.appendChild(holoVid1);
    holoVidCon.childNodes[0].currentTime = 0;
    holoVid1.play();

    //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
    button[0].style.visibility = "visible";
    button[1].style.visibility = "visible";
    button[2].style.visibility = "visible";
    button[3].style.visibility = "visible";
    button[4].style.visibility = "visible";


    //~~~~~~~~When first vide ends~~~~~~~~
    holoVid1.onended = function() {
      //remove the video from the container
      clearHoloCont();
      //play next holo vid
      holoVidCont.appendChild(holoVid2);
      holoVid2.loop = true;
      holoVid2.play();
      //show the hologram buttons
      button[1].style.visibility = "visible";
      button[3].style.visibility = "visible";
    };

    //~~~~~~~~~~~~~~~when third video ends~~~~~~~~~~~~~~~~~
    holoVid3.onended = function() {
    //remove the video from the holo container
    clearHoloCont();
    //set the cockpit hologram orb color back to white
    //cockColor.src = cockpitColors["white"];
    };

  // ~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //clearBgCont();
  //   //border();
  //   };
}
