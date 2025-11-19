// Script kontak sederhana
const form = document.getElementById("contact");
const msgEl = document.getElementById("msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  msgEl.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima.`;
  form.reset();
});
