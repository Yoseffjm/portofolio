alert("Selamat datang di website Fedora!");

// Fungsi ubah warna background
function ubahWarna() {
  document.body.style.backgroundColor = "#e6f7ff";
}

// Fungsi Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Mode otomatis (Dark/Light berdasarkan jam)
const jam = new Date().getHours();
if (jam >= 18 || jam <= 6) {
  document.body.classList.add("dark-mode");
}

// Validasi form
function validasiForm() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua field harus diisi!");
    return false;
  }

  alert("Form berhasil dikirim. Terima kasih!");
  return true;
}

// Animasi fade-in saat scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const posisi = section.getBoundingClientRect().top;
    const tinggiLayar = window.innerHeight;
    if (posisi < tinggiLayar - 100) {
      section.classList.add("show");
    }
  });
});

// Tombol Back to Top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
