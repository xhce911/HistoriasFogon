/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const prevBtn = document.getElementById("prev");
const s = skrollr.init();
const nextBtn = document.getElementById("next");
// eslint-disable-next-line no-var
var volumeBtn = document.getElementById("volum").childNodes[0];
let sound = true;
const textview = document.getElementsByClassName("text1");
let increment = 0;
// eslint-disable-next-line no-undef
const content = document.getElementsByName("content").offsetWidth;

// eslint-disable-next-line no-var


// eslint-disable-next-line no-undef
window.onscroll = function(e) {
  // eslint-disable-next-line no-undef
  console.log(window.scrollY); // Value of scroll Y in px
};


volumeBtn.onclick = function() {
  sound = !sound;
  if (sound == false) {
    volumeBtn.classList.remove("fas", "fa-volume-up");
    volumeBtn.classList.add("fas", "fa-volume-off");
  } else {
    volumeBtn.classList.remove("fas", "fa-volume-off");
    volumeBtn.classList.add("fas", "fa-volume-up");
  }
};


prevBtn.onclick = function() {
  // eslint-disable-next-line no-const-assign
  increment -= 420;
  s.animateTo(increment);
  console.log(increment);
};
nextBtn.onclick = function() {
  // eslint-disable-next-line no-const-assign
  increment += 420;
  s.animateTo(increment);
  console.log(increment);
};



