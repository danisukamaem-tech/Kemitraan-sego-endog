document.getElementById("form").addEventListener("submit", function(e){

    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let kota = document.getElementById("kota").value;
    let lokasi = document.getElementById("lokasi").value;
    let franchise = document.getElementById("franchise").value;
    let usaha = document.getElementById("usaha").value;

    let pesan =
`Halo Admin Kemitraan Restoran

Saya ingin bergabung menjadi mitra.

Nama Lengkap : ${nama}

Kota Domisili : ${kota}

Rencana Lokasi : ${lokasi}

Pernah memiliki usaha Franchise : ${franchise}

Nama usaha Franchise : ${usaha}`;

    let url = "https://wa.me/628891526096?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");

});