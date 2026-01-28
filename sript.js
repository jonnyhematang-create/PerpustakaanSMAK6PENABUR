document.getElementById("bookForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const judul = document.getElementById("judul").value;
    const pengarang = document.getElementById("pengarang").value;
    const link = document.getElementById("link").value;

    addBook(judul, pengarang, link);

    // reset form
    document.getElementById("bookForm").reset();
});

function addBook(judul, pengarang, link) {
    const bookList = document.getElementById("bookList");

    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
        <h3>${judul}</h3>
        <p><strong>Pengarang:</strong> ${pengarang}</p>
        <a href="${link}" target="_blank">📖 Baca Buku</a>
    `;

    bookList.appendChild(card);
}
