// Slider 1
const slider1 = document.getElementById("slider");
const leftBtn1 = document.querySelector(".left-btn");
const rightBtn1 = document.querySelector(".right-btn");

// Slider 2
const slider2 = document.getElementById("sliderr");
const leftBtn2 = document.querySelector(".ll");
const rightBtn2 = document.querySelector(".lr");

const scrollAmount = 270;

// Slider 1 scroll
rightBtn1.addEventListener("click", () => {
  if (slider1.scrollLeft + slider1.clientWidth >= slider1.scrollWidth - scrollAmount) {
    slider1.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider1.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});

leftBtn1.addEventListener("click", () => {
  if (slider1.scrollLeft <= 0) {
    slider1.scrollTo({ left: slider1.scrollWidth, behavior: "smooth" });
  } else {
    slider1.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
});

// Slider 2 scroll
rightBtn2.addEventListener("click", () => {
  if (slider2.scrollLeft + slider2.clientWidth >= slider2.scrollWidth - scrollAmount) {
    slider2.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider2.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
});

leftBtn2.addEventListener("click", () => {
  if (slider2.scrollLeft <= 0) {
    slider2.scrollTo({ left: slider2.scrollWidth, behavior: "smooth" });
  } else {
    slider2.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
});



  const backToTopBtn = document.getElementById("backToTop");

  // Show or hide the button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly when clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

