// Elemen-elemen yang dibutuhkan
const captchaQuestionElement = document.querySelector(".captcha-question");
const captchaErrorElement = document.getElementById("captcha-error");
const captchaAnswerInput = document.getElementById("answer-captcha");
const loginForm = document.getElementById("login-form");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const eye = document.getElementsByClassName("eyeIcon")[0];
const eyeSlash = document.getElementsByClassName("eyeSlashIcon")[0];

// Variabel untuk menyimpan angka
let number1, number2, correctAnswer;

// Fungsi untuk menghasilkan soal CAPTCHA
function generateCaptcha() {
  number1 = Math.floor(Math.random() * 10) + 1; // Angka 1-10
  number2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = number1 + number2; // Operasi penjumlahan
  captchaQuestionElement.textContent = `Berapa hasil dari ${number1} + ${number2}?`;
}

// Validasi CAPTCHA sebelum submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah submit default

  const userAnswer = parseInt(captchaAnswerInput.value, 10); // Ambil jawaban pengguna
  const valueInputUsername = inputUsername.value.trim();
  const valueInputPassword = inputPassword.value.trim();
  if (valueInputUsername === "aldi" && valueInputPassword === "aldi") {
    if (userAnswer === correctAnswer) {
      loginForm.submit(); // Submit form jika benar
    } else if (userAnswer !== correctAnswer) {
      captchaErrorElement.textContent = "Tolol!! udah gede gabisa penjumlahan";
      // generateCaptcha(); // Buat soal baru jika salah
      // captchaAnswerInput.value = ""; // Reset jawaban
    } else {
      captchaErrorElement.textContent = "Tolol!! udah gede gabisa penjumlahan";
      generateCaptcha(); // Buat soal baru jika salah
      captchaAnswerInput.value = ""; // Reset jawaban
    }
  } else {
    captchaErrorElement.textContent = "Salah goblok, gimana sih lu!!";
    generateCaptcha(); // Buat soal baru jika salah
  }
});

// Toggle password hide/unhide
function togglePassword() {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    eye.style.display = "none";
    eyeSlash.style.display = "flex";
  } else {
    inputPassword.type = "password";
    eye.style.display = "flex";
    eyeSlash.style.display = "none";
  }
}
// Generate CAPTCHA saat halaman dimuat
generateCaptcha();
