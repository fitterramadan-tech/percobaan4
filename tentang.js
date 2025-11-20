// ===== Respon Mood Lucu =====
document.getElementById("mood-happy1").onclick = function () {
    alert("Wah! Kamu spertinya sedang dalam kondisi perfectmu 😏✨ Jaga keseharianmu baik baik ya!");
};

document.getElementById("mood-normal1").onclick = function () {
    alert("Oke! jaga baik baik keseharianmu ya😐👍");
};

document.getElementById("mood-tired1").onclick = function () {
    alert("Lagi capek ya? 😴💤 Jangan lupa istirahat cukup!");
};

document.getElementById("mood-sick1").onclick = function () {
    alert("Aduh, mending kamu istirahat dulu atau minum obat 🥺");
};

document.getElementById("cek-aktivitas").onclick = function () {
    let waktu = document.getElementById("waktu").value;
    let cuaca = document.getElementById("cuaca").value;
    let hasil = document.getElementById("hasil-aktivitas");

    if (!waktu || !cuaca) {
        hasil.textContent = "Silakan pilih waktu dan cuaca dulu 😄";
        return;
    }

    let rekomendasi = "";

    // AI logika sederhana
    if (waktu === "pagi" && cuaca === "cerah") {
        rekomendasi = "Jalan kaki atau Jogging santai dan olahraga fisik ringan untuk pembentukkan otot yang bagus 🚶‍♂️✨";
    } else if (waktu === "siang" && cuaca === "panas") {
        rekomendasi = "Perbanyak minum air dan hindari aktivitas berat, serta kurangi kontak matahari secara langsung 🥵💧";
    } else if (waktu === "sore" && cuaca === "mendung") {
        rekomendasi = "lakukan peregangan ringan di dalam rumah atau istirahat secukupnya serta memakai pakaian hangat agar tubuh tetap stabil ☕📖";
    } else if (waktu === "malam" && cuaca === "cerah") {
        rekomendasi = "Waktu yang pas buat istirahat atau menonton film favoritmu 🎬🌙";
    } else if (cuaca === "hujan") {
        rekomendasi = "Karena hujan lebih baik di rumah saja, dengarkan musik atau tidur 😌🌧️";
    } else {
        rekomendasi = "Lakukan aktivitas yang kamu suka selama aman dan nyaman 👍😊";
    }

    hasil.textContent = rekomendasi;
};
