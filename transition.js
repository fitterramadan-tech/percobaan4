document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        if (!href || href.startsWith("#")) return;

        e.preventDefault();

        // Tambahkan animasi slide keluar
        document.body.classList.add("slide-out");

        setTimeout(() => {
            window.location.href = href;
        }, 500); // waktu harus sama dengan animasi CSS
    });
});

