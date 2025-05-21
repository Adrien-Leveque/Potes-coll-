const images = [
  "face.jpg",
  "droite.jpg",
  "derriere.jpg",
  "gauche.jpg",
  "dessus.jpg",
  "face_stylo.jpg",
  "face_frigo.jpg",
];
let currentIndex = 0;
let currentColor = "blanc";

const mainImage = document.getElementById("mainImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const colorButtons = document.querySelectorAll(".colorBtn");
const photoNumber = document.getElementById("photoNumber");

function updateImage() {
  mainImage.src = `../../images/pots/${currentColor}/${images[currentIndex]}`;
  photoNumber.textContent = `${currentIndex + 1}/${images.length}`;
}

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Color switch
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentColor = button.dataset.color;
    updateImage();
  });
});

// Init
updateImage();
