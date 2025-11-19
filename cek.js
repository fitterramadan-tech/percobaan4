function prosesCek() {
    let bb = parseFloat(document.getElementById("bb").value);
    let tb = parseFloat(document.getElementById("tb").value) / 100;
    let umur = parseFloat(document.getElementById("umur").value);
    let keluhan = document.getElementById("keluhan").value;

    if (!bb || !tb || !umur) {
        alert("Harap isi semua data!");
        return;
    }

    // Hitung BMI
    let bmi = bb / (tb * tb);
    let kategori = "";

    if (bmi < 18.5) kategori = "Kurus";
    else if (bmi < 25) kategori = "Normal";
    else if (bmi < 30) kategori = "Gemuk";
    else kategori = "Obesitas";

    // Risiko umur
    let risiko = "";
    if (umur < 17) risiko = "Risiko rendah, masih usia muda.";
    else if (umur <= 35) risiko = "Risiko normal, jaga pola hidup sehat.";
    else if (umur <= 50) risiko = "Mulai waspada, lakukan cek rutin.";
    else risiko = "Risiko tinggi, jaga kesehatan lebih ketat.";

    // Keluhan
    let saran = "";

    switch (keluhan) {
        case "normal":
            saran = "Kamu terlihat sehat, pertahankan gaya hidup baik!";
            break;
        case "pusing":
            saran = "Istirahat cukup dan perbanyak minum air.";
            break;
        case "batuk":
            saran = "Minum hangat, istirahat, hindari dingin.";
            break;
        case "demam":
            saran = "Kompres hangat dan perbanyak cairan.";
            break;
        case "lelah":
            saran = "Tidur cukup dan kurangi aktivitas berat.";
            break;
        case "sesak":
            saran = "Segera periksa dokter jika berlanjut.";
            break;
    }

    // Simpan hasil ke localStorage (pindah halaman)
    let hasil = {
        bmi: bmi.toFixed(1),
        kategori: kategori,
        risiko: risiko,
        saran: saran,
        keluhan: keluhan
    };

    localStorage.setItem("hasilCek", JSON.stringify(hasil));
    window.location.href = "hasil.html";
}

// Halaman hasil
if (document.title.includes("Hasil")) {
    let data = JSON.parse(localStorage.getItem("hasilCek"));

    let box = document.getElementById("hasil-container");
    box.innerHTML = `
        <h1>Hasil Pemeriksaan</h1>

        <p><strong>BMI:</strong> ${data.bmi} (${data.kategori})</p>
        <p><strong>Risiko Berdasarkan Umur:</strong><br>${data.risiko}</p>
        <p><strong>Keluhan:</strong> ${data.keluhan}</p>

        <div class="saran-box">
            <h3>Saran Kesehatan:</h3>
            <p>${data.saran}</p>
        </div>
    `;
}
