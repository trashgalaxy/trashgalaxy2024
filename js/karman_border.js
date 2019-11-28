//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~karman border~~~~~~~~
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
  button[4].style.visibility = "hidden";

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

    };
  //button2 OPEN JOURNEY TO PLANET AMAZON GAME
  button[2].onclick = function(){
  console.log('button2');
;
  };
  //button3 TBD
  button[3].onclick = function(){
  console.log('button3');
  window.open("https://thearlman.github.io/Asa_Perlman-Cart_253_Fall_2019/Projects/Project3",
          "_blank", "replace=true, scrollbars=no, top=100, left=100, width=900, height=500")
  };
  //button3 TBD
  button[4].onclick = function(){
  console.log('button3');
  transition();
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
        button[3].style.visibility = "visible";
        button[4].style.visibility = "visible";
      };

      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        //called by button
        function transition() {
        //hide the hologram buttons
        for (let i = 0; i < button.length; i++){
          button[i].style.visibility = "hidden";
        };
        //remove the video from the container
        holoVidCont.removeChild(holoVidCont.childNodes[0]);
        //play next holo vid
        holoVidCont.appendChild(holoVid3);
        holoVid3.play();
      };
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      holoVid3.onended = function() {
      //remove the video from the holo container
      holoVidCont.removeChild(holoVidCont.childNodes[0]);
      //remove video from bg container
      bgVidCont.removeChild(bgVidCont.childNodes[0]);
      //set the cockpit hologram orb color back to white
      cockColor.src = cockpitColors["white"];
      trans2();
      };

  // ~~~~~~~~check when background video is done playing~~~~~~~~
  // bgVid.onended = function() {
  //   //bgVidCont.removeChild(bgVidCont.childNodes[0]);
  //   //border();
  //   };
}
