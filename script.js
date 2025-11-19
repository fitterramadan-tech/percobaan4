/* ======================= PAGE HANDLER ===================== */
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");

    if (pageId === "profile-page") {
        document.getElementById("profile-username").innerText = localStorage.getItem("loggedUser");
    }
}

/* ======================= SIDEBAR ===================== */
function toggleMenu() {
    let sb = document.getElementById("sidebar");
    sb.style.left = (sb.style.left === "0px") ? "-220px" : "0px";
}

/* ======================= AUTH ===================== */
function register() {
    let u = document.getElementById("reg-username").value.trim();
    let p = document.getElementById("reg-password").value.trim();
    let err = document.getElementById("register-error");

    if (!u || !p) return err.textContent = "Isi semua data!";
    
    if (localStorage.getItem(u)) return err.textContent = "Username sudah terdaftar!";

    localStorage.setItem(u, p);
    err.textContent = "";
    alert("Berhasil daftar!");
    showPage("login-page");
}

function login() {
    let u = document.getElementById("login-username").value.trim();
    let p = document.getElementById("login-password").value.trim();
    let err = document.getElementById("login-error");

    if (!u || !p) return err.textContent = "Isi semua data!";

    let dbPass = localStorage.getItem(u);
    if (!dbPass || dbPass !== p) return err.textContent = "Username atau password salah!";

    localStorage.setItem("loggedUser", u);
    err.textContent = "";
    showPage("home-page");
}

function logout() {
    localStorage.removeItem("loggedUser");
    showPage("login-page");
}

/* ======================= MASCOT CHAT ===================== */
document.getElementById("mascot").onclick = () => {
    let chat = document.getElementById("chat-popup");
    chat.style.display = "block";
    setTimeout(() => chat.style.display = "none", 3000);
};

/* ======================= BMI ===================== */
function hitungBMI() {
    let umur = document.getElementById("bmi-umur").value;
    let gender = document.getElementById("bmi-gender").value;
    let tinggi = document.getElementById("bmi-tinggi").value;
    let berat = document.getElementById("bmi-berat").value;
    let result = document.getElementById("bmi-result");

    if (!umur || !gender || !tinggi || !berat) {
        result.style.display = "block";
        result.innerHTML = "<p>Isi semua data dengan benar!</p>";
        return;
    }

    let tinggiM = tinggi / 100;
    let bmi = (berat / (tinggiM * tinggiM)).toFixed(1);

    let kategori = "";
    if (bmi < 18.5) kategori = "Kurus";
    else if (bmi < 25) kategori = "Ideal";
    else if (bmi < 30) kategori = "Berlebih";
    else kategori = "Obesitas";

    let ideal = gender === "pria" ? (tinggi - 100) - (0.1 * (tinggi - 100)) : (tinggi - 100) - (0.15 * (tinggi - 100));

    let saran = {
        "Kurus": "Perbanyak makan bergizi, protein tinggi, dan olahraga ringan.",
        "Ideal": "Pertahankan pola makan dan olahraga teratur.",
        "Berlebih": "Kurangi makanan berlemak dan tambahkan aktivitas fisik.",
        "Obesitas": "Fokus pada diet rendah kalori dan olahraga intensitas sedang."
    };

    result.style.display = "block";
    result.innerHTML = `
        <p><b>BMI: ${bmi}</b></p>
        <p>Status: <b>${kategori}</b></p>
        <p>Berat ideal: <b>${ideal.toFixed(1)} kg</b></p>
        <p>Saran: ${saran[kategori]}</p>
    `;
}

/* ======================= REKOMENDASI AKTIVITAS ===================== */
function rekomendasiAktivitas() {
    let c = document.getElementById("cuaca").value;
    let m = document.getElementById("musim").value;
    let w = document.getElementById("waktu").value;
    let result = document.getElementById("cuaca-result");

    if (!c || !m || !w) {
        result.style.display = "block";
        result.innerHTML = "<p>Isi semua data!</p>";
        return;
    }

    let rekom = "";
    let alasan = "";

    if (c === "cerah") { rekom = "Jogging / Bersepeda"; alasan = "Cuaca cerah ideal untuk aktivitas luar ruangan."; }
    if (c === "mendung") { rekom = "Jalan santai"; alasan = "Tidak terlalu panas, cocok untuk aktivitas ringan."; }
    if (c === "hujan") { rekom = "Yoga indoor"; alasan = "Aman dilakukan di dalam rumah saat hujan."; }
    if (c === "panas") { rekom = "Renang"; alasan = "Mendinginkan tubuh saat cuaca panas."; }
    if (c === "badai") { rekom = "Workout indoor"; alasan = "Hindari aktivitas di luar ruangan."; }

    result.style.display = "block";
    result.innerHTML = `
        <p><b>Aktivitas disarankan:</b> ${rekom}</p>
        <p>Alasan: ${alasan}</p>
        <p>Musim: ${m}, Waktu: ${w}</p>
    `;
}

/* ======================= AUTO LOGIN ===================== */
window.onload = () => {
    if (localStorage.getItem("loggedUser")) {
        showPage("home-page");
    }
};
