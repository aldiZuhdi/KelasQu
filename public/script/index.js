// Initialize AOS
AOS.init();

// bg change navbar
document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const intersection = document.querySelector(".intersection").offsetHeight;

  if (window.scrollY > intersection) {
    header.classList.add("bg-change");
  } else {
    header.classList.remove("bg-change");
  }
});
// 1
// // Fungsi untuk memeriksa apakah elemen terlihat di viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
// }

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
}

// Pilih elemen section .features dan progress bars
const progressBars = document.querySelectorAll(".progress-width");

window.addEventListener("scroll", () => {
  progressBars.forEach((bar) => {
    if (isInViewport(bar)) {
      if (!bar.classList.contains("animate__slideInLeft")) {
        bar.classList.add("animate__slideInLeft");
      }
    } else {
      // Menghapus animasi jika elemen keluar dari viewport
      if (bar.classList.contains("animate__slideInLeft")) {
        bar.classList.remove("animate__slideInLeft");
      }
    }
  });
});

// 2
// window.addEventListener("scroll", () => {
//   progressBars.forEach((bar) => {
//     if (isInViewport(bar)) {
//       console.log("Element in viewport:", bar);
//       bar.classList.add("animate__slideInLeft");
//     } else if (isOutOfViewport(featuresSection)) {
//       console.log("Section out of viewport:", featuresSection);
//       bar.classList.remove("animate__slideInLeft");
//     }
//   });
// });

// 1
// // Event scroll untuk memeriksa elemen
// window.addEventListener("scroll", () => {
//   progressBars.forEach((bar) => {
//     if (isInViewport(bar)) {
//       // Tambahkan animasi setiap kali elemen terlihat di viewport
//       bar.classList.add("animate__slideInLeft");
//     } else if (isOutOfViewport(featuresSection)) {
//       // Hapus animasi saat section keluar dari viewport
//       bar.classList.remove("animate__slideInLeft");
//     }
//   });
// });

// 3
