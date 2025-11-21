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
    } else if (waktu === "pagi" && cuaca === "panas") {
        rekomendasi = "Mana ada cuaca panas di pagi hari 🥵🥵";
    } else if (waktu === "pagi" && cuaca === "mendung") {
        rekomendasi = "Baca buku sambil minum kopi atau meditasi selama beberapa menit📖😌";
    } else if (waktu === "pagi" && cuaca === "hujan") {
        rekomendasi = "Olahraga indoor yang ringan atau menikmati suasana hujan dengan minum kopi/teh hangat☕💧";
    } else if (waktu === "siang" && cuaca === "cerah") {
        rekomendasi = "Piknik, jalan santai atau olahraga outdoor yang cukup 🥵💧";
    } else if (waktu === "siang" && cuaca === "panas") {
        rekomendasi = "Perbanyak minum air dan hindari aktivitas berat atau berenang  🥵💧";
    } else if (waktu === "siang" && cuaca === "mendung") {
        rekomendasi = " Bekerja atau belajar, mendengarkan podcast atau kegiatan kreatif lainnya didalam rumah ";
    } else if (waktu === "siang" && cuaca === "hujan") {
        rekomendasi = "Menonton film, memasak makanan sehat, atau membersihkan rumah 💧💧";
    } else if (waktu === "sore" && cuaca === "cerah") {
        rekomendasi = "Jalan santai, bersepeda, aktivitas olahraga ringan outdoor👍😊";
    } else if (waktu === "sore" && cuaca === "panas") {
        rekomendasi = "Aktivitas indoor ringan, minum es, atau istirahat yang cukup👍🍹";
    } else if (waktu === "sore" && cuaca === "mendung") {
        rekomendasi = "lakukan peregangan ringan di dalam rumah atau istirahat secukupnya serta memakai pakaian hangat agar tubuh tetap stabil ☕📖";
    } else if (waktu === "sore" && cuaca === "hujan") {
        rekomendasi = "Minum-minuman hangat, ☕📖";
    } else if (waktu === "malam" && cuaca === "cerah") {
        rekomendasi = "Waktu yang pas buat istirahat atau menonton film favoritmu 🎬🌙";
    } else if (waktu === "malam" && cuaca === "panas") {
        rekomendasi = "Mana ada bro 🗿🗿";
    } else if (waktu === "malam" && cuaca === "mendung") {
        rekomendasi = "Tido pun soedap nih👍🌙";
    } else if (waktu === "malam" && cuaca === "hujan😌🌧️") {
        rekomendasi = "Tido pun makin soedap nih";
    } else if (cuaca === "hujan") {
        rekomendasi = "Karena hujan lebih baik di rumah saja, dengarkan musik atau tidur 😌🌧️";
    } else {
        rekomendasi = "Lakukan aktivitas yang kamu suka selama aman dan nyaman 👍😊";
    }

    hasil.textContent = rekomendasi;
};
