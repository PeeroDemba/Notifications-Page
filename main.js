"use strict";

const unread = document.getElementsByClassName("ur");
const reddot = document.getElementsByClassName("rd");
const button = document.getElementById("button");
const count = document.getElementById("count");

function read() {
  for (var i = 0; i < unread.length; i++) {
    unread[i].className = "ur read";
  }

  for (var i = 0; i < reddot.length; i++) {
    reddot[i].style.display = "none";
  }

  count.innerHTML = "0";
}

button.addEventListener("click", read);
