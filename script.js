const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const navbar = document.querySelector("#navbar");

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.toggle("hidden") === false;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
  });
});

const updateNavbar = () => {
  if (!navbar) return;
  navbar.classList.toggle("shadow-[0_18px_50px_rgba(0,0,0,0.32)]", window.scrollY > 20);
  navbar.classList.toggle("bg-[#070604]/95", window.scrollY > 20);
};

updateNavbar();
window.addEventListener("scroll", updateNavbar, { passive: true });
function openLightbox(src){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightboxImg").src=src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}
function openLightbox(src){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = src;
}

function closeLightbox(){
  document.getElementById("lightbox").style.display = "none";
}

const lightbox = document.getElementById("lightbox");

if (lightbox) {
  lightbox.addEventListener("click", function(e){
    if(e.target === this){
      closeLightbox();
    }
  });
}



const serviceRows = document.querySelectorAll(".service-row");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

serviceRows.forEach((row) => {
  observer.observe(row);
});


window.addEventListener("scroll", () => {
  serviceRows.forEach((row) => {
    const top = row.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      row.classList.add("show");
    }
  });
});

serviceRows.forEach((row) => row.classList.add("show"));
const galleryImages = [
  "images/frontsalon.jpeg",
  "images/seat.jpeg",
  "images/kidg.jpeg",
  "images/hairbotoxl.jpeg",
  "images/glimpse.jpeg"
];

let currentImage = 0;

function showImage() {
  document.getElementById("galleryImage").src =
    galleryImages[currentImage];
}

function nextImage() {
  currentImage = (currentImage + 1) % galleryImages.length;
  showImage();
}

function prevImage() {
  currentImage =
    (currentImage - 1 + galleryImages.length) %
    galleryImages.length;
  showImage();
}
showImage();