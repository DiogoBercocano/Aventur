const navbar = document.querySelector(".navbar");
const menuIcon = document.getElementById("menuIcon");

function toggleMenu() {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.setAttribute("src", "imgs/x.png");
  } else {
    menuIcon.setAttribute("src", "imgs/list-menu.png");
  }
}
// Menu List

const toggleMode = document.getElementById("toggleMode");
const modeIcon = document.getElementById("modeIcon");

function toggleDarkMode() {
  if (document.body.className === "dark-mode") {
    document.body.className = "";
    modeIcon.src = "imgs/brightness-high.svg";
  } else {
    document.body.className = "dark-mode";
    modeIcon.src = "imgs/moon.svg";
  }
}
toggleMode.onclick = toggleDarkMode;
// Dark mode

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hiddenX")) {
        entry.target.classList.add("showX");
      } else if (entry.target.classList.contains("hiddenY")) {
        entry.target.classList.add("showY");
      }
    } else {
      if (entry.target.classList.contains("showX")) {
        entry.target.classList.remove("showX");
      } else if (entry.target.classList.contains("showY")) {
        entry.target.classList.remove("showY");
      }
    }
  });
});

const elementsX = document.querySelectorAll(".hiddenX");
const elementsY = document.querySelectorAll(".hiddenY");

elementsX.forEach((element) => myObserver.observe(element));
elementsY.forEach((element) => myObserver.observe(element));
// Scroll animation

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});
// Carousel
