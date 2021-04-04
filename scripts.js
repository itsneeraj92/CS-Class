//var audio = new Audio("http://radiodhaakad.com:8000/live?type=.mp3");
var audio = new Audio("http://khasharyanvi.com:8000/live?type=.mp3");
//var audio = new Audio("music.mp3");

var ply=0;
 document.getElementById("loading").style.webkitAnimationPlayState="paused";   
 document.getElementById("loading2").style.webkitAnimationPlayState="paused";  
function playFun() {
    var rotate = document.getElementById("loading");
    var rotate2 = document.getElementById("loading2");
  if (ply==0) {
    //document.getElementById("cont").style.width="73px";
    document.getElementById("play_pause").src="pause.png";
    rotate.style.webkitAnimationPlayState="running";
    rotate2.style.webkitAnimationPlayState="running";
    audio.play();
    ply=ply+1;
  }
  else if (ply==1) {
    //document.getElementById("cont").style.width="55px";
    document.getElementById("play_pause").src="play.png";
    rotate.style.webkitAnimationPlayState="paused";
    rotate2.style.webkitAnimationPlayState="paused";
    audio.pause();
    ply=ply-1;
  }
  document.getElementById("durtext").innerHTML = (audio.duration/60).toFixed(2) + " Minutes";

}
