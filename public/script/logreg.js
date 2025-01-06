// Elemen-elemen yang dibutuhkan
const captchaQuestionElement = document.querySelector(".captcha-question");
const captchaErrorElement = document.getElementById("captcha-error");
const captchaAnswerInput = document.getElementById("answer-captcha");
const loginForm = document.getElementById("login-form");

// Variabel untuk menyimpan angka
let number1, number2, correctAnswer;

// Fungsi untuk menghasilkan soal CAPTCHA
function generateCaptcha() {
  number1 = Math.floor(Math.random() * 15) + 1; // Angka 1-10
  number2 = Math.floor(Math.random() * 15) + 1;
  correctAnswer = number1 + number2; // Operasi penjumlahan
  captchaQuestionElement.textContent = `What is ${number1} + ${number2}?`;
}

// Validasi CAPTCHA sebelum submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Mencegah submit default

  const userAnswer = parseInt(captchaAnswerInput.value, 10); // Ambil jawaban pengguna
  if (userAnswer === correctAnswer) {
    loginForm.submit(); // Submit form jika benar
  } else {
    captchaErrorElement.textContent = "Jawaban salah dasar bodoh!";
    generateCaptcha(); // Buat soal baru jika salah
    captchaAnswerInput.value = ""; // Reset jawaban
  }
});

// Generate CAPTCHA saat halaman dimuat
generateCaptcha();
