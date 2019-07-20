/*
  Get our elements
*/
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playBackValue = player.querySelector('.playBackRate');
const videoTime = player.querySelector('.time');
const volumeIcon = player.querySelector('.volume-icon');
const fullscreenButton= player.querySelector('.fullscreenButton') 
let mousedown = false; // Gives the user the ability to drag the current time marker

/* 
  Functions
*/
function onPlayToggle(e) {
  video.paused ? video.play() : video.pause();
}

// Switch play button icon when video gets paused
function updatePlayButton() { 
  // If video is paused show play button else show pause button
  video.paused ? playButton.innerHTML='&#xf04b;' : playButton.innerHTML='&#xf04c;';
}

function updateProgressBar(e) {
  const percentage = (video.currentTime / video.duration) * 100;
  const videoDuration = fancyTimeFormat(Math.round(video.duration));
  const formattedCurrentTime = fancyTimeFormat(Math.round(video.currentTime));
  progressBar.style.flexBasis = `${percentage}%`;
  videoTime.innerHTML = `${formattedCurrentTime} / ${videoDuration}`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log("e.offsetX: ", e.offsetX);
  console.log("progress.offsetWidth: ", progress.offsetWidth);
  
  video.currentTime = scrubTime;
}

function onRangeChange(e) {
  const name = e.target.name;
  const value = parseFloat(e.target.value);
  video[name] = value;  

  // Change volume icons based on the volume level
  if(name === "volume") {
    if(value === 0) { // Show muted icon if volume === 0
      volumeIcon.innerHTML = '&#xf6a9;';
    } else if (value <= 0.3) { // Low volume if less than 30%
      volumeIcon.innerHTML = '&#xf027;';
    } else { // Normal volume icon
      volumeIcon.innerHTML = '&#xf028;';   
    }
  }

  if (name === "playbackRate") {
    playBackValue.innerHTML = `x ${value}`;
  }
}

function skipVideo() {
  const value = this.dataset.skip;
  video.currentTime += parseFloat(value);
}

function onToggleFullScreen() {
  if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
  }
  
  fullscreenButton.innerHTML = '&#xf066;';
}

/*
  Event listeners
*/ 
playButton.addEventListener("click", onPlayToggle);
video.addEventListener("click", onPlayToggle);  // Play when the video gets clicked on
// Switch play button icon when video gets paused
video.addEventListener("play", updatePlayButton); 
video.addEventListener("pause", updatePlayButton); 
video.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener('change', updateProgressBar);
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
// If the mouse is held down then go ahead and update the time
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); 
fullscreenButton.addEventListener('click', onToggleFullScreen);
ranges.forEach(range => range.addEventListener('change', onRangeChange));
skipButtons.forEach(button => button.addEventListener('click', skipVideo));

// Stackoverflow function to format time into the appropriate format
// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
function fancyTimeFormat(time){   
  // Hours, minutes and seconds
  var hrs = Math.floor(time / 3600);
  var mins = Math.floor((time % 3600) / 60);
  var secs = Math.floor(time % 60);

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
