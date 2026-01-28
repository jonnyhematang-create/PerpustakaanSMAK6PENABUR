/* ---------------- NAVBAR ANIMATION ---------------- */
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
});

/* ---------------- KOLEKSI BUKU ---------------- */
const bookForm = document.getElementById("bookForm");
const list = document.getElementById("koleksiList");

let koleksi = JSON.parse(localStorage.getItem("koleksiBuku")) || [];

function tampilkanBuku() {
  if (!list) return;
  list.innerHTML = "";
  koleksi.forEach((buku) => {
    list.innerHTML += `
      <div class="book-card">
        <h3>${buku.judul}</h3>
        <p><b>Pengarang:</b> ${buku.pengarang}</p>
        <a href="${buku.link}" target="_blank">Baca Buku</a>
      </div>
    `;
  });
}

if (bookForm) {
  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const bukuBaru = {
      judul: document.getElementById("judul").value,
      pengarang: document.getElementById("pengarang").value,
      link: document.getElementById("link").value,
    };

    koleksi.push(bukuBaru);
    localStorage.setItem("koleksiBuku", JSON.stringify(koleksi));
    bookForm.reset();
    tampilkanBuku();
  });
}

tampilkanBuku();
