const secondHand= document.querySelector(".second-hand");
const minuteHand= document.querySelector(".minute-hand");
const hourHand= document.querySelector(".hour-hand");

function setDate(){
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours() - 12;
  
  const offset = 90;
  // seconds divided by 60 
  const secDegrees = ((sec / 60) * 360) + offset;  
  const minDegrees = ((360/60) * min) + offset;
  const hourDegrees = ((360/12) * hour) + offset;
  
  // Stop the second hand from going all the way around to reach 0 and continue instead
  if (sec == 0) {
    secondHand.style.transition = "none";
  }
  if (secDegrees == 1) {
    secondHand.style.transition = "all 0.05s";
  }

  secondHand.style.transform = `rotate(${secDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
