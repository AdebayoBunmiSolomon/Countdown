var txtDarkMode = document.querySelector(".txt-dark-mode-default");
var btnToggle = document.querySelector("#btn-toggle");
var mainSpan = document.querySelector(".main-span-default-mode");
var txtMili = document.querySelector("#txt-mili");
var txtSec = document.querySelector("#txt-sec");
var txtMins = document.querySelector("#txt-mins");
var txtHrs = document.querySelector("#txt-hrs");
var txtCountDownRepresentation = document.querySelectorAll(
  ".txt-countdown-representation-default-mode"
);
var txtdayHolder = document.querySelector("#txt-day-holder");
var txtminHolder = document.querySelector("#txt-min-holder");

//Button declaration
var btnStart = document.querySelector("#btn-start");
var btnStop = document.querySelector("#btn-stop");
var btnReset = document.querySelector("#btn-reset");

//For timer
var interval;

var hrsCount = 0;
var hrsCountText;
txtHrs;

var minsCount = 0;
var minsCountText;
txtMins;

var secCount = 0;
var secCountText;
txtSec;

var miliCount = 0;
var miliCountText;
txtMili;

//For toggling
var body = document.body;
var isToggle = true;
var isToggleText = "";

btnToggle.addEventListener("click", function () {
  isToggleText = isToggle.toString();
  body.classList.toggle("body-dark-mode");
  //Toggle Dark mode
  if (isToggle === true) {
    isToggle = false;
    darkMode();
  }
  //Toggle Default mode
  else if (isToggle === false) {
    defaultMode();
    isToggle = true;
  }
});

//Change to darkmode
function darkMode() {
  txtDarkMode.textContent = "Default Mode";
  txtDarkMode.classList.remove("txt-dark-mode-default");
  txtDarkMode.classList.add("txt-dark-mode");
  mainSpan.classList.remove("main-span-default-mode");
  mainSpan.classList.add("main-span-dark-mode");
  txtCountDownRepresentation.forEach((txtCountdown) => {
    txtCountdown.classList.remove("txt-countdown-representation-default-mode");
    txtCountdown.classList.add("txt-countdown-representation-dark-mode");
  });
}

//Change to default mode
function defaultMode() {
  txtDarkMode.textContent = "Dark Mode";
  txtDarkMode.classList.remove("txt-dark-mode");
  txtDarkMode.classList.add("txt-dark-mode-default");
  mainSpan.classList.remove("main-span-dark-mode");
  mainSpan.classList.add("main-span-default-mode");
  txtCountDownRepresentation.forEach((txtCountdown) => {
    txtCountdown.classList.remove("txt-countdown-representation-dark-mode");
    txtCountdown.classList.add("txt-countdown-representation-default-mode");
  });
}

btnStart.addEventListener("click", function () {
  //Start coundown
  window.clearInterval(interval);
  interval = window.setInterval(function () {
    startCountDown();
  }, 20);
});

btnStop.addEventListener("click", function () {
  //Stop timer
  window.clearInterval(interval);
});

btnReset.addEventListener("click", function () {
  //Declare new value for each variables
  hrsCount = 0;
  minsCount = 0;
  secCount = 0;
  miliCount = 0;
  //Set hours to 0
  hrsCountText = 0 + hrsCount;
  txtHrs.textContent = 0;
  txtHrs.textContent = "0" + hrsCountText;
  //Set minutes to 0
  minsCountText = 0 + minsCount;
  txtMins.textContent = 0;
  txtMins.textContent = "0" + minsCountText;
  //Set seconds to 0
  secCountText = 0 + secCount;
  txtSec.textContent = 0;
  txtSec.textContent = "0" + secCountText;
  //Set miliseconds to 0
  miliCountText = 0 + miliCount;
  txtMili.textContent = 0;
  txtMili.textContent = "0" + miliCountText;
});

function startCountDown() {
  //Calculate mili seconds
  miliCount++;
  miliCountText = 0 + miliCount;
  txtMili.textContent = "0" + miliCountText;
  if (miliCountText > 9) {
    txtMili.textContent = miliCountText;
    //Calculate seconds
    if (miliCountText === 60) {
      secCount++;
      secCountText = 0 + secCount;
      txtSec.textContent = "0" + secCountText;
      miliCount = 0;
      if (secCountText > 9) {
        txtSec.textContent = secCountText;
        //Calculate mins
        if (secCountText === 60) {
          minsCount++;
          minsCountText = 0 + minsCount;
          txtMins.textContent = "0" + minsCountText;
          secCount = 0;
          if (minsCountText > 9) {
            txtMins.textContent = minsCountText;
            //Calculate Hours
            if (minsCountText === 60) {
              hrsCount++;
              hrsCountText = 0 + hrsCount;
              txtHrs.textContent = "0" + hrsCountText;
              minsCount = 0;
              if (hrsCountText > 9) {
                txtHrs.textContent = hrsCount;
              }
            }
          }
        }
      }
    }
  }
}
