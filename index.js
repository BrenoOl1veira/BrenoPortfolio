// fixed header on scroll

// active hamburger icon
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav-mobile");

hamb.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

document.body.setAttribute("data-theme", "t-light");

const button = document.querySelector(".js-theme");
const button1 = document.querySelector(".js-theme1");

const themes = {
  "t-dark": "t-light",
  "t-light": "t-dark",
};

function img() {
  var image4 = document.getElementById("image4");
  if (image4.src.match("img/shape-circle.png")) {
    image4.src = "img/shape-circle1.png";
  } else {
    image4.src = "img/shape-circle.png";
  }

  var image1 = document.getElementById("image1");
  if (image1.src.match("img/logos/logo.png")) {
    image1.src = "img/logos/logo1.png";
  } else {
    image1.src = "img/logos/logo.png";
  }

  var image2 = document.getElementById("image2");
  if (image2.src.match("img/shape-square.png")) {
    image2.src = "img/shape-square1.png";
  } else {
    image2.src = "img/shape-square.png";
  }
  var image5 = document.getElementById("image5");
  if (image5.src.match("img/performance.png")) {
    image5.src = "img/performance1.png";
  } else {
    image5.src = "img/performance.png";
  }

  var image6 = document.getElementById("image6");
  if (image6.src.match("img/hero.png")) {
    image6.src = "img/hero1.png";
  } else {
    image6.src = "img/hero.png";
  }
}

if (button) {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTheme = document.body.dataset.theme;
    document.body.setAttribute("data-theme", themes[currentTheme] || "t-light");
  });
}

if (button1) {
  button1.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTheme = document.body.dataset.theme;
    document.body.setAttribute("data-theme", themes[currentTheme] || "t-light");
  });
}

ScrollReveal().reveal(".container", {
  duration: 2000,
  origin: "top",
  distance: "100px",
  easing: "cubic-bezier(0.5, 0, 0, 0.5)",
});

function mudar(val) {
  var x = document.getElementsByClassName("conteudo");
  for (var i = 0; i < x.length; i++) x[i].style.display = "none";
  document.getElementById("conteudo" + val).style.display = "block";
}
