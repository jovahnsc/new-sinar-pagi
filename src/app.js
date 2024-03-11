// konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

// Best Seller Clickable Card
const cards = document.querySelectorAll(".card");
// console.log(cards);
cards.forEach(function (card) {
  console.log(card);
});

// Show Scroll Up
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

// Dark Mode
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

// Scroll Sections Active Link
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener("scroll", activeLink);

// Scroll Reveal
Window.sr = ScrollReveal({ reset: true });

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home-image", {
  origin: "right",
});
sr.reveal(".home-content", {
  origin: "left",
});

sr.reveal(".new-content");
sr.reveal(".new-image-left", {
  origin: "left",
});
sr.reveal(".new-image-right", {
  origin: "right",
});

sr.reveal(".bestseller-left");
sr.reveal(".bestseller-right", { origin: "bottom" });

sr.reveal(".category");

sr.reveal(".review", { origin: "bottom" });

sr.reveal(".about-right", {
  origin: "left",
});
sr.reveal(".about-left", {
  origin: "right",
});
