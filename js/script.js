var link = document.querySelector(".map-inner a");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});


close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("feedback-error");
});


popup.addEventListener("submit", function(event) {
  if (!login.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {  
    localStorage.setItem("login", login.value);
  }
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-show")) {
      popup.classList.remove("feedback-show");
      popup.classList.remove("feedback-error");
    }
  }
});