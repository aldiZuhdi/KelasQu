// Initialize AOS
AOS.init();

document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const intersection = document.querySelector(".intersection").offsetHeight;

  if (window.scrollY > intersection) {
    header.classList.add("bg-change");
  } else {
    header.classList.remove("bg-change");
  }
});
