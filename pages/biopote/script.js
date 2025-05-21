const images_standart = [
  "face.jpg",
  "droite.jpg",
  "derriere.jpg",
  "gauche.jpg",
  "haut.jpg",
  "dessus.jpg",
  "face_stylo.jpg",
  "face_frigo.jpg",
];

let currentIndex_standart = 0;
let currentColor = "blanc";

const mainImage_standart = document.getElementById("mainImage_standart");
const prevBtn_standart = document.getElementById("prevBtn_standart");
const nextBtn_standart = document.getElementById("nextBtn_standart");
const colorButtons = document.querySelectorAll(".colorBtn");
const photoNumber_standart = document.getElementById("photoNumber_standart");

function updateImage_standart() {
  mainImage_standart.src = `../../images/pots/${currentColor}/${images_standart[currentIndex_standart]}`;
  photoNumber_standart.textContent = `${currentIndex_standart + 1}/${
    images_standart.length
  }`;
}

// Navigation
prevBtn_standart.addEventListener("click", () => {
  currentIndex_standart =
    (currentIndex_standart - 1 + images_standart.length) %
    images_standart.length;
  updateImage_standart();
});

nextBtn_standart.addEventListener("click", () => {
  currentIndex_standart = (currentIndex_standart + 1) % images_standart.length;
  updateImage_standart();
});

// Color switch
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentColor = button.dataset.color;
    updateImage_standart();
  });
});

const images_dore = [
  "face.jpg",
  "face_sep.jpg",
  "droite.jpg",
  "derriere.jpg",
  "gauche.jpg",
  "haut.jpg",
  "haut_sep.jpg",
  "dessus.jpg",
  "dessus_sep.jpg",
  "sep.jpg",
  "face_stylos.jpg",
  "face_sep_stylos.jpg",
  "face_frigo.jpg",
  "face_frigo_sep.jpg",
];

let currentIndex_dore = 0;

const mainImage_dore = document.getElementById("mainImage_dore");
const prevBtn_dore = document.getElementById("prevBtn_dore");
const nextBtn_doret = document.getElementById("nextBtn_dore");
const photoNumber_dore = document.getElementById("photoNumber_dore");

function updateImage_dore() {
  mainImage_dore.src = `../../images/pots/doré/${images_dore[currentIndex_dore]}`;
  photoNumber_dore.textContent = `${currentIndex_dore + 1}/${
    images_dore.length
  }`;
}

// Navigation
prevBtn_dore.addEventListener("click", () => {
  currentIndex_dore =
    (currentIndex_dore - 1 + images_dore.length) % images_dore.length;
  updateImage_dore();
});

nextBtn_dore.addEventListener("click", () => {
  currentIndex_dore = (currentIndex_dore + 1) % images_dore.length;
  updateImage_dore();
});

// Init
updateImage_standart();
updateImage_dore;
