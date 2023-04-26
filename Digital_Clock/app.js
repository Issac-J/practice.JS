// Getting Elements
const displayClockEl = document.getElementById("display-clock");

// console.log(displayClockEl);

function setTime() {
  let date = new Date();
  let hour = date.getHours(); // 0 - 23
  let minute = date.getMinutes(); // 0 - 59
  let second = date.getSeconds(); // 0 - 59
  let session = "AM";

  //   console.log(hour, minute, second, session);

  if (hour == 0) hour = 12;
  else if (hour > 12) {
    h = h - 12;
    session = "PM";
  }

  hour = String(hour).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  second = String(second).padStart(2, "0");

  displayClockEl.innerText = `${hour}:${minute}:${second} ${session}`;
}

setTime();
setInterval(setTime, 1000);
