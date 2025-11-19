/* ===========================
   SISTEM AUTENTIKASI
=========================== */

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
}

/* Register */
function register() {
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    const err = document.getElementById("regError");

    if (!user || !pass) {
        err.textContent = "Isi semua data!";
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    err.textContent = "Berhasil! Silakan login.";
}

/* Login */
function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    const err = document.getElementById("loginError");

    if (user === localStorage.getItem("user") && pass === localStorage.getItem("pass")) {
        showPage("appPage");
    } else {
        err.textContent = "Username atau password salah!";
    }
}

function logout() {
    showPage("loginPage");
}

/* ===========================
   NAVIGASI
=========================== */
function toggleMenu() {
    const sb = document.getElementById("sidebar");
    sb.style.width = sb.style.width === "200px" ? "0" : "200px";
}

function goHome() {
    changeContent("homePage");
}

function showBMI() {
    changeContent("bmiPage");
}

function showAktivitas() {
    changeContent("aktivitasPage");
}

function changeContent(id) {
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}


/* ===========================
   HOME - KARTUN POP CHAT
=========================== */
document.getElementById("kartun").addEventListener("click", () => {
    const chat = document.getElementById("chatPop");
    chat.style.display = chat.style.display === "block" ? "none" : "block";
});


/* ===========================
   BMI CALCULATOR
=========================== */
function hitungBMI() {
    const t = parseFloat(document.getElementById("bmiTinggi").value) / 100;
    const b = parseFloat(document.getElementById("bmiBerat").value);
    const gender = document.getElementById("bmiGender").value;

    const result = document.getElementById("bmiResult");

    if (!t || !b) {
        result.style.display = "block";
        result.innerHTML = "Isi data dengan benar!";
        return;
    }

    const bmi = (b / (t * t)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Kurus";
    else if (bmi < 25) status = "Ideal";
    else if (bmi < 30) status = "Berlebih";
    else status = "Obesitas";

    // Berat ideal (rumus Devine sederhana)
    const ideal = gender === "l" ? (50 + 0.9 * ((t * 100) - 152)) : (45 + 0.9 * ((t * 100) - 152));

    let saran = "";
    if (status === "Kurus") saran = "Perbanyak makan bergizi dan protein.";
    if (status === "Ideal") saran = "Pertahankan pola makan seimbang!";
    if (status === "Berlebih") saran = "Kurangi gula dan lemak jenuh.";
    if (status === "Obesitas") saran = "Konsultasikan ke ahli gizi dan olahraga rutin.";

    result.style.display = "block";
    result.innerHTML = `
        <b>BMI: ${bmi}</b> <br>
        Status: <b>${status}</b> <br>
        Berat Ideal: <b>${ideal.toFixed(1)} kg</b> <br><br>
        Saran: ${saran}
    `;
}


/* ===========================
   REKOMENDASI AKTIVITAS
=========================== */
function cekAktivitas() {
    const cuaca = document.getElementById("cuaca").value;
    const musim = document.getElementById("musim").value;
    const waktu = document.getElementById("waktu").value;

    const result = document.getElementById("aktivitasResult");

    let aktivitas = "";
    let alasan = "";

    if (cuaca === "cerah") {
        aktivitas = "Jogging / Bersepeda";
        alasan = "Cuaca cerah sangat cocok untuk aktivitas luar ruangan.";
    } else if (cuaca === "mendung") {
        aktivitas = "Jalan santai / stretching";
        alasan = "Cuaca mendung nyaman, tapi hindari aktivitas berat.";
    } else if (cuaca === "hujan") {
        aktivitas = "Yoga / latihan indoor";
        alasan = "Agar tetap aktif tanpa terkena hujan.";
    } else if (cuaca === "panas") {
        aktivitas = "Gym indoor / berenang";
        alasan = "Mencegah dehidrasi dan sengatan panas.";
    } else if (cuaca === "badai") {
        aktivitas = "Olahraga ringan di rumah";
        alasan = "Badai berbahaya untuk aktivitas luar ruangan.";
    }

    result.style.display = "block";
    result.innerHTML = `
        <b>Aktivitas:</b> ${aktivitas}<br>
        <b>Alasan:</b> ${alasan}<br>
        <b>Kondisi:</b> Cuaca ${cuaca}, musim ${musim}, waktu ${waktu}.
    `;
}
