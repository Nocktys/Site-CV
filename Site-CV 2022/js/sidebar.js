var affichage_description = document.getElementById("description");
var affichage_cursus = document.getElementById("cursus");
var affichage_experience = document.getElementById("experience");

// Open and close sidebar
$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  });
});

function load() {
  affichage_description.style.display = "block";
  affichage_cursus.style.display = "none";
  affichage_experience.style.display = "none";
}

function afficher_cursus() {
  affichage_description.style.display = "none";
  affichage_cursus.style.display = "block";
  affichage_experience.style.display = "none";
}

function afficher_experience() {
  affichage_description.style.display = "none";
  affichage_cursus.style.display = "none";
  affichage_experience.style.display = "block";
}

// Tooltip
const link = document.querySelector("#link");
const tooltip = document.querySelector("#tooltip");

Popper.createPopper(link, tooltip, {
  placement: "bottom",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});
function show() {
  tooltip.setAttribute("data-show", "");
}

function hide() {
  tooltip.removeAttribute("data-show");
}

const showEvents = ["mouseenter", "focus"];
const hideEvents = ["mouseleave", "blur"];

showEvents.forEach((event) => {
  link.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  link.addEventListener(event, hide);
});
