// Efek keluar sebelum pindah halaman
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Jangan animasi anchor (#)
        if (!href || href.startsWith("#")) return;

        e.preventDefault();
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location = href;
        }, 400); // waktu fade-out harus sama dengan CSS
    });
});
