// Ambil elemen
const form = document.getElementById("scheduleForm");
const list = document.getElementById("scheduleList");

// Ambil data dari localStorage atau buat array kosong
let schedules = JSON.parse(localStorage.getItem("schedules")) || [];

// Tampilkan data awal
renderSchedules();

// Event submit form
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const weekday = document.getElementById("weekday").value;
    const activity = document.getElementById("activity").value;

    // Buat objek kegiatan
    const newSchedule = {
        id: Date.now(),
        year,
        month,
        day,
        weekday,
        activity,
        done: false
    };

    schedules.push(newSchedule);
    saveData();
    renderSchedules();
    form.reset();
});

// Simpan ke localStorage
function saveData() {
    localStorage.setItem("schedules", JSON.stringify(schedules));
}

// Render daftar jadwal
function renderSchedules() {
    list.innerHTML = "";

    if (schedules.length === 0) {
        list.innerHTML = "<p>Belum ada jadwal.</p>";
        return;
    }

    schedules.forEach(item => {
        const div = document.createElement("div");
        div.className = "card schedule-item";

        div.innerHTML = `
            <label>
                <input type="checkbox" ${item.done ? "checked" : ""} onclick="toggleDone(${item.id})">
                <strong>${item.day}/${item.month}/${item.year}</strong> (${item.weekday})
            </label>
            <p style="${item.done ? "text-decoration: line-through;" : ""}">
                ${item.activity}
            </p>
            <button class="delete-btn" onclick="deleteSchedule(${item.id})">Hapus</button>
        `;

        list.appendChild(div);
    });
}

// Toggle checklist selesai
function toggleDone(id) {
    schedules = schedules.map(item => {
        if (item.id === id) {
            item.done = !item.done;
        }
        return item;
    });

    saveData();
    renderSchedules();
}

// Hapus jadwal
function deleteSchedule(id) {
    schedules = schedules.filter(item => item.id !== id);
    saveData();
    renderSchedules();
}
