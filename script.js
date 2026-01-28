// ------------------------------------------------------------------------------------
// LOAD DATA
// ------------------------------------------------------------------------------------
let daftarBuku = JSON.parse(localStorage.getItem("daftarBuku")) || [];

function simpanData() {
    localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
}

// ------------------------------------------------------------------------------------
// TAMBAH BUKU
// ------------------------------------------------------------------------------------
function tambahBuku() {
    let judul = document.getElementById("judul").value;
    let pengarang = document.getElementById("pengarang").value;
    let kategori = document.getElementById("kategori").value;
    let link = document.getElementById("link").value;

    if (!judul || !pengarang || !kategori || !link) {
        alert("Semua data wajib diisi!");
        return;
    }

    let buku = {
        judul: judul,
        pengarang: pengarang,
        kategori: kategori,
        link: link
    };

    daftarBuku.push(buku);
    simpanData();
    tampilkanBuku();

    document.getElementById("judul").value = "";
    document.getElementById("pengarang").value = "";
    document.getElementById("kategori").selectedIndex = 0;
    document.getElementById("link").value = "";
}

// ------------------------------------------------------------------------------------
// TAMPILKAN BUKU
// ------------------------------------------------------------------------------------
function tampilkanBuku(filter = "all") {
    let area = document.getElementById("listBuku");
    area.innerHTML = "";

    daftarBuku.forEach((buku, index) => {

        if (filter !== "all" && buku.kategori !== filter) return;

        let div = document.createElement("div");
        div.className = "buku-item";

        div.innerHTML = `
            <h3>${buku.judul}</h3>
            <p><b>Pengarang:</b> ${buku.pengarang}</p>
            <p><b>Kategori Dewey:</b> ${buku.kategori}</p>
            <a href="${buku.link}" target="_blank">Buka Buku</a>
        `;

        area.appendChild(div);
    });
}

// ------------------------------------------------------------------------------------
// FILTER KATEGORI DEWEY
// ------------------------------------------------------------------------------------
function filterKategori(kode) {
    tampilkanBuku(kode);
}

// ------------------------------------------------------------------------------------
window.onload = () => tampilkanBuku();
// ------------------------------------------------------------------------------------
