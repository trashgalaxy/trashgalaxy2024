let progress = document.getElementById('progress');
let queue = new createjs.LoadQueue(false);
// queue.on("progress", event => {
//   let progress = Math.floor(event.progress *100);
//   this.progress.style.width = progress+'%';
//   if (progress == 100) {
//     console.log('all done');
//     document.querySelector('body').style.background = 'white';
//   }
// });
//
// queue.on("complete", event => {
//   //gallery.classList.add('fadeIn');
//   progress.classList.add('fadeOut');
// });
queue.on("fileload", handeFileComplete);
//hologram videos
queue.loadFile({src:'videos/Trump_Speech.webm', type:createjs.Types.VIDEO}); //0
queue.loadFile({src:'videos/LiftOff.webm', type:createjs.Types.VIDEO}); //1
queue.loadFile({src:'videos/Trans_1.webm', type:createjs.Types.VIDEO}); //2
//background videos
queue.loadFile({src:'videos/Space_Border.webm', type:createjs.Types.VIDEO}); //3
queue.loadFile({src:'videos/starman.webm', type:createjs.Types.VIDEO}); //4
queue.loadFile({src:'videos/Border_Text.webm', type:createjs.Types.VIDEO}); //5
// queue.loadFile('images/cockpits/Cockpit_Blue.png');
// queue.loadFile('images/cockpits/Cockpit_Green.png');
// queue.loadFile('images/cockpits/Cockpit_Purple.png');
// queue.loadFile('images/cockpits/Cockpit_Red.png');
// queue.loadFile('images/cockpits/Cockpit_White.png');
function handeFileComplete(event){
  console.log("loaded file");
  let item = event.result;
  hologramVideoArray.push(item);
}
