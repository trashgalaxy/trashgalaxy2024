//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~earth Museum~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//
//
function earthMuseum(){
  timeline = "earthMuseum";
  //hide the splash screen
  let splashScreen = document.getElementById('splash').style.visibility = "hidden";
  let enterButton = document.getElementById('enterButton').style.visibility = "hidden";

  //pull the appropriate videos for the sequence
  let holoVid1 = videoArray[10];
  let holoVid2 = videoArray[11];
  let holoVid3 = videoArray[12];

  let bgVidLoop = videoArray[13];
  let museumVids = [videoArray[14], videoArray[15], videoArray[16]];
  let currentMuseumVid = 0;
  let museumVidTitle = ["Now Playing: Earth's Primative rockets",
                        "Now Playing: Earth, The Early Years",
                        "Now Playing: Earth's Downfall"];
  let currentMuseumVidTitle = 0;







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
  button[0].innerHTML = "Welcome To Midway to Mars. Press Next";
  button[0].onclick = function(){
    if (timeline = "earthMuseum"){
      console.log('button0');
      //remove video from bg container
      clearBgCont();
      bgVidCont.appendChild(bgVid1);
      bgVid1.play();
    };
  };
  //button1Plays the second film at the drive in
  button[1].innerHTML = "NEXT";
  button[1].onclick = function(){
    if (timeline = "earthMuseum"){
      console.log('button1');
      clearBgCont();
      button[0].innerHTML = museumVidTitle[currentMuseumVidTitle];
      bgVidCont.appendChild(museumVids[currentMuseumVid]);
      museumVids[currentMuseumVid].play();
      currentMuseumVid ++;
      currentMuseumVidTitle ++;
      if (currentMuseumVid >= museumVids.length){
        currentMuseumVid = 0;
        currentMuseumVidTitle = 0;
      }
    };
  };
  //button2 button0 Plays the third film at the drive in
  button[2].innerHTML = "GTF-OUTTA HERE";
  button[2].onclick = function(){
    if (timeline = "earthMuseum"){
      console.log('button2');
      transitionForward();
    };
  };
  //button3 jump ahead
  button[3].innerHTML = "Jump Back";
  let menustate = "on";
  button[3].onclick = function(){
    if (timeline = "earthMuseum"){
      console.log('button3');
      transitionBackward();
    };
  };
  menuVideo = true;
  //button4 moves on to the next screen
  button[4].innerHTML = ">>";
  button[4].onclick = function(){
    if (timeline = "earthMuseum"){
      console.log('button4');
      activeButtons = [3, 2, 1, 0];
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
    //hide the hologram buttons
    for (let i = 0; i < button.length; i++){
      button[i].style.visibility = "hidden";
    };
  //remove video from bg container
  clearBgCont();
  //call next screen
  finalSequence();
  }
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //called by button
  function transitionBackward() {
      clearHoloCont();
      //play closing holo vid
      holoVidCont.appendChild(holoVid3);
      holoVid3.play();
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
    // holoVidCont.appendChild(holoVid1);
    // holoVidCont.childNodes[0].currentTime = 0;
    // holoVid1.play();

    //~~~~~~~~Set the hologram button(s) visibillity~~~~~~~~
    button[0].style.visibility = "hidden";
    button[1].style.visibility = "hidden";
    button[2].style.visibility = "hidden";
    button[3].style.visibility = "hidden";
    button[4].style.visibility = "visible";
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
