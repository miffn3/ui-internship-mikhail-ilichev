let isPlayed = false;
let video = document.getElementsByClassName("video")[0];
let classes = document.getElementsByClassName("button_round")[0].classList;

function playPauseVideo() {
  if (!isPlayed) {
    video.play();
    classes.remove("button_play");
    classes.add("button_pause");
    isPlayed = true;
  } else {
    video.pause();
    classes.remove("button_pause");
    classes.add("button_play");
    isPlayed = false;
  }
}