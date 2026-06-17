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

/* SERVICES VIEW ALL / VIEW LESS */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll("#services article");
    const viewBtn = document.getElementById("viewAllBtn");

    if (!cards.length || !viewBtn) return;

    let expanded = false;

    function hideCards() {

        cards.forEach((card, index) => {

            if (index >= 4) {
                card.style.display = "none";
            } else {
                card.style.display = "";
            }

        });

        viewBtn.innerText = "View All Services";
        expanded = false;
    }

    function showCards() {

        cards.forEach(card => {
            card.style.display = "";
        });

        viewBtn.innerText = "View Less";
        expanded = true;
    }

    hideCards();

    viewBtn.classList.remove("hidden");

    viewBtn.addEventListener("click", () => {

        if (expanded) {
            hideCards();

            document
              .getElementById("services")
              .scrollIntoView({
                behavior: "smooth",
                block: "start"
              });

        } else {
            showCards();
        }

    });

});
const cardsReveal = document.querySelectorAll(".service-card");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

},{
    threshold:0.15
});

cardsReveal.forEach((card,index)=>{

    card.style.transitionDelay = `${index * 80}ms`;

    revealObserver.observe(card);

});

function openVideo(src){

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    video.src = src;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    video.play();

    document.body.style.overflow = "hidden";

}

function closeVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    video.pause();
    video.currentTime = 0;

    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";

}
// CLOSE VIDEO ON ESC KEY

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){
        closeVideo();
    }

});

// CLOSE VIDEO WHEN CLICKING DARK BACKGROUND

const videoModal = document.getElementById("videoModal");

if(videoModal){

    videoModal.addEventListener("click", (e) => {

        if(e.target === videoModal){
            closeVideo();
        }

    });

}

const brandTrack = document.getElementById("brandTrack");

let brandIndex = 0;

const visibleBrands =
window.innerWidth <= 768 ? 1 : 3;

const totalBrands =
document.querySelectorAll(".brand-slide").length;

function updateBrands(){

    const slide =
    document.querySelector(".brand-slide");

    const slideWidth = slide.offsetWidth;

    brandTrack.style.transform =
      `translateX(-${brandIndex * slideWidth}px)`;

}

document.getElementById("brandNext")
?.addEventListener("click",()=>{

    if(brandIndex < totalBrands - visibleBrands){

        brandIndex++;

        updateBrands();

    }

});

document.getElementById("brandPrev")
?.addEventListener("click",()=>{

    if(brandIndex > 0){

        brandIndex--;

        updateBrands();

    }

});

window.addEventListener("resize",()=>{

    updateBrands();

});setInterval(() => {

    const visibleBrands =
    window.innerWidth <= 768 ? 1 : 3;

    if(brandIndex < totalBrands - visibleBrands){

        brandIndex++;

    }else{

        brandIndex = 0;

    }

    updateBrands();

},1000);

const productTrack = document.getElementById("productTrack");

let productIndex = 0;

const visibleProducts =
window.innerWidth <= 768 ? 1 : 3;

const totalProducts =
document.querySelectorAll(".product-slide").length;

function updateProducts(){

    const slide =
    document.querySelector(".product-slide");

    if(!slide) return;

    const slideWidth = slide.offsetWidth;

    productTrack.style.transform =
      `translateX(-${productIndex * slideWidth}px)`;

}

document.getElementById("productNext")
?.addEventListener("click",()=>{

    if(productIndex < totalProducts - visibleProducts){

        productIndex++;

    }else{

        productIndex = 0;

    }

    updateProducts();

});

document.getElementById("productPrev")
?.addEventListener("click",()=>{

    if(productIndex > 0){

        productIndex--;

    }else{

        productIndex =
        totalProducts - visibleProducts;

    }

    updateProducts();

});

setInterval(()=>{

    if(productIndex < totalProducts - visibleProducts){

        productIndex++;

    }else{

        productIndex = 0;

    }

    updateProducts();

},3500);
/* TESTIMONIAL ANIMATION */

const testimonialCards =
document.querySelectorAll(".testimonial-card");

const testimonialObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            testimonialCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index * 200);

            });

        }else{

            testimonialCards.forEach(card=>{

                card.classList.remove("show");

            });

        }

    });

},{threshold:.2});

const reviewSection =
document.querySelector("#reviews");

if(reviewSection){

    testimonialObserver.observe(reviewSection);

}
const galleryImages = [
    "images/g1.jpg",
    "images/g2.jpg",
    "images/seat.jpeg",
    "images/g3s.jpg"
];

let galleryIndex = 0;

function updateGallery(){

    const img =
    document.getElementById("gallerySlider");

    if(img){

        img.src =
        galleryImages[galleryIndex];

    }

}

function nextGallery(){

    galleryIndex =
    (galleryIndex + 1)
    % galleryImages.length;

    updateGallery();

}

function prevGallery(){

    galleryIndex =
    (galleryIndex - 1 + galleryImages.length)
    % galleryImages.length;

    updateGallery();

}

setInterval(() => {

    nextGallery();

}, 3500);